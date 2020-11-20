import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { Button, Checkbox, Table } from 'antd';
import { connect } from 'react-redux';
import { deleteEventByIdAction } from '../../../store/action/actions';
import { changeStatusByIdAction , 
  changeCheckedStatusAction, 
  changeAllCheckedStatusAction } from '../../../store/action/actions';
import EditEvent from '../editEvent/EditEvent';

function EventList(props) {
  const columns = [
    {
      title:'序号',
      width: '60px',
      align: 'center',
      render: (text, record, index) => index + 1,
    },
    {
      title: <div>
        <Checkbox 
          checked={props.checked}
          onClick={() => handleAllSelectClick(props.checked)} 
        >
          全选
        </Checkbox>
      </div>,
      width: '110px',
      align: 'center',
      render: (text, record) => 
        <div>
          <Checkbox 
            checked={record.checked}
            onClick={e => handleCheckBoxClick(e, record.id)}
          />
        </div>
    },
    {
      title: '事件名称',
      dataIndex: 'detail',
      width: '300px',
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

  const handleCheckBoxClick = (e, id) => {
    abandomBlurAfterCheckboxChecked(e);
    props.singleCheckBoxClick(id, true);
  };

  const handleAllSelectClick = (isAllChecked) => {
    props.selectAllCheckboxClick(isAllChecked);
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

const mapStateToProps = (state) => {
  return {
    checked: state.checked
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEventById: (id) => {
      dispatch(deleteEventByIdAction(id));
    },
    changeStatusById: (id, completed, timeStamp) => {
      dispatch(changeStatusByIdAction(id, completed, timeStamp));
    },
    singleCheckBoxClick: (id, isChangeCheckedStatus=true) => {
      dispatch(changeCheckedStatusAction(id, isChangeCheckedStatus));
    },
    selectAllCheckboxClick: (isAllChecked) => {
      dispatch(changeAllCheckedStatusAction(isAllChecked));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(EventList, styles));