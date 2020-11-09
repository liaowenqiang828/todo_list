import React, {Component} from 'react';
import './eventList.css';
import { Button, Table } from 'antd';
import {connect} from 'react-redux';
import deleteEventByIdAction from '../../../store/action/deleteEventByIdAction';
import changeStatusByIdAction from '../../../store/action/changeStatusByIdAction';
import EditEvent from '../editEvent/EditEvent';

class EventList extends Component {

    columns = [
        {
            title:'序号',
            width: '70px',
            align: 'center',
            render: (text, record, index) => index + 1,
        },
        {
            title: '事件名称',
            dataIndex: 'detail',
            width: '400px',
            align: 'center'
        },
        {
            title: '状态',
            width: '100px',
            align: 'center',
            render: (text, record) => (
                record.completed === false ? '未完成' : '已完成'
            ),
        },
        {
            title: '操作',    
            align: 'center',
            width: '250px',
            render: (text, record) => (
                <div className='operation'>
                    <EditEvent />
                    <Button
                        disabled={record.completed}
                        onClick={this.handleChangeStatusClick.bind(this, text.id, !text.completed)}
                    >
                        完成
                    </Button>
                    <Button
                        onClick={this.handleDeleteClick.bind(this, text.id)}
                    >
                        删除
                    </Button>
                </div>
            ),
        },
    ];

    handleDeleteClick(id) {
        this.props.deleteEventById(id);
    }

    handleChangeStatusClick(id, completed) {
        this.props.changeStatusById(id, completed);
    }

    dataTransform(events) {
        events.map(event => {
            return event.status = event.completed === true ? '已完成' : '未完成';
        });
    };

    render() {
        return (
            <div className='main'>
                <Table 
                pagination={{
                    hideOnSinglePage: true,
                    pageSize: 7,
                    defaultCurrent: 1,
                    position: ['bottomRight']
                }}
                size='large'
                tableLayout='fixed'
                rowKey={record => record.id}
                columns={this.columns}
                dataSource={this.props.events}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEventById: (id) => {
            dispatch(deleteEventByIdAction(id));
        },
        changeStatusById: (id, completed) => {
            dispatch(changeStatusByIdAction(id, completed));
        }
    }
}

export default connect(null, mapDispatchToProps)(EventList);