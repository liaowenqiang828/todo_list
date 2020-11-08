import React, {Component} from 'react';
import './main.css';
import { Button, Table } from 'antd';
import {connect} from 'react-redux';
import deleteEventByIdAction from '../../store/action/deleteEventByIdAction';
import changeStatusByIdAction from '../../store/action/changeStatusByIdAction';

class Main extends Component {
    columns = [
        {
            title:'序号',
            width: '50px',
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
            dataIndex: 'status',
            width: '100px',
            align: 'center'
        },
        {
            title: '操作',    
            align: 'center',
            width: '250px',
            render: (text, record) => (
                <div className='operation'>
                    <Button>编辑</Button>
                    <Button
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
        console.log(id);
        console.log(completed);

        this.props.changeStatusById(id, completed);
    }

    dataTransform(events) {
        events.map(event => {
            return event.status = event.completed === true ? '已完成' : '未完成';
        });
    };

    render() {
        this.dataTransform(this.props.events.flat());
        const events = this.props.events.flat();

        return (
            <div className='main'>
                <Table 
                pagination={false}
                size='large'
                tableLayout='fixed'
                rowKey={record => record.id}
                columns={this.columns}
                dataSource={events}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        events: state.data,
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);