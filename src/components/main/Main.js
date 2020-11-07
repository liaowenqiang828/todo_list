import React, {Component} from 'react';
import './main.css';
import { Button, Table } from 'antd';
import {connect} from 'react-redux';
import deleteEventByIdAction from "../../store/action/deleteEventByIdAction";

class Main extends Component {
    columns = [
        {
            title:'序号',
            dataIndex: 'id',
            key: 'id',
            width: '50px',
            align: 'center'
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
                    <Button>完成</Button>
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
        console.log(id);
        this.props.deleteEventById(id);
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);