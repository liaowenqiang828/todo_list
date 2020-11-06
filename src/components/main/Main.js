import React from 'react';
import CssModules from 'react-css-modules';
import styles from './main.module.scss';
import { Button, Table } from 'antd';

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
        render: () => (
            <div className={styles.operation}>
                <Button>编辑</Button>
                <Button>删除</Button>
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
    dataTransform(props.events.flat());
    const events = props.events.flat();

    return (
        <div className={styles.main}>
            <Table 
            pagination={false}
            size='large'
            tableLayout='fixed'
            rowKey={record => record.id}
            columns={columns}
            dataSource={events}/>
        </div>
    )
}

export default CssModules(Main, styles);