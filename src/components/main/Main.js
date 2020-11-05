import React from 'react';
import CssModules from 'react-css-modules';
import styles from './Main.module.scss';
import { Table } from 'antd';

const columns = [
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
        key: 'detail',
        width: '400px',
        align: 'center'
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: '100px',
        align: 'center'
    },
    {
        title: '操作',    
        align: 'center',
        width: '250px',
        render: () => (
            <div className={styles.operation}>
                <a href='www.baidu.com'>编辑</a>
                <a href='www.baidu.com'>删除</a>
            </div>
        ),
    },
];

const dataTransform = (events) => {
    events.map(event => {
        return event.status = event.completed === true ? '已完成' : '未完成';
    });
}

function Main(props) {
    dataTransform(props.events);

    return (
        <div className={styles.main}>
            <Table 
            pagination={false}
            size='large'
            tableLayout='fixed'
            rowKey={record => record.id}
            
            columns={columns}
            dataSource={props.events}/>
        </div>
    )
}

export default CssModules(Main, styles);