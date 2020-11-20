import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { Button, Input, Table } from 'antd';
import { connect } from 'react-redux';
import { deleteEventByIdAction } from '../../../store/action/actions';
import { changeStatusByIdAction } from '../../../store/action/actions';
import EditEvent from '../editEvent/EditEvent';

function EventList(props) {
  const columns = [
    {
      title:'序号',
      width: '70px',
      align: 'center',
      render: (text, record, index) => index + 1,
    },
    {
      title: '选择',
      width: '70px',
      align: 'center',
      render: () => 
        <div>
          <Input 
            type='checkbox' 
            onClick={e => abandomBlurAfterCheckboxChecked(e)}
          />
        </div>
    },
    {
      title: '事件名称',
      dataIndex: 'detail',
      width: '330px',
      align: 'center'
    },
    {
      title: '状态',
      width: '100px',
      align: 'center',
      render: (text, record) => 
        record.completed === false ? '未完成' : '已完成'
    },
    {
      title: '操作',    
      align: 'center',
      width: '250px',
      render: (text, record) => 
        <div className={styles.operation}>
          <EditEvent originInput={record.detail} id={record.id}/>
          <Button
            disabled={record.completed}
            onClick={handleChangeStatusClick.bind(this, text.id, !text.completed, Date.now())}
          >
            完成
          </Button>
          <Button
            onClick={handleDeleteClick.bind(this, text.id)}
          >
            删除
          </Button>
        </div>
    },
  ];

  const abandomBlurAfterCheckboxChecked = (e) => {
    e.target.blur();
  };

  const handleDeleteClick = (id) => {
    props.deleteEventById(id);
  };

  const handleChangeStatusClick = (id, completed, timeStamp) => {
    props.changeStatusById(id, completed, timeStamp);
  };

  return (
    <div className={styles.main}>
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
        columns={columns}
        dataSource={props.events}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEventById: (id) => {
      dispatch(deleteEventByIdAction(id));
    },
    changeStatusById: (id, completed, timeStamp) => {
      dispatch(changeStatusByIdAction(id, completed, timeStamp));
    }
  };
};

export default connect(null, mapDispatchToProps)(cssModules(EventList, styles));