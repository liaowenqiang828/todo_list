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
          onClick={() => handleAllSelectClick(props.checked, props.checkedIdList)} 
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
            onClick={e => handleCheckBoxClick(e, record.id, props.checkedIdList)}
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

  const handleCheckBoxClick = (e, id, checkedIdList) => {
    abandomBlurAfterCheckboxChecked(e);
    props.singleCheckBoxClick(id, true, checkedIdList);
  };

  const handleAllSelectClick = (isAllChecked, checkedIdList) => {
    props.selectAllCheckboxClick(isAllChecked, checkedIdList);
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
        dataSource={props.events}
      />
      {props.isShowAllDeleteCompletedButton[0] && 
      <div className='deleteCompleteBtn'>
        <Button type='primary'>全部删除</Button>
        <Button type='primary' disabled={!props.isShowAllDeleteCompletedButton[1]}>全部完成</Button>
      </div>
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    checked: state.checked,
    data: state.data,
    checkedIdList: state.checkedIdList,
    isShowAllDeleteCompletedButton: state.isShowAllDeleteCompletedButton,
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
    singleCheckBoxClick: (id, isChangeCheckedStatus=true, checkedIdList) => {
      dispatch(changeCheckedStatusAction(id, isChangeCheckedStatus, checkedIdList));
    },
    selectAllCheckboxClick: (isAllChecked, checkedIdList) => {
      dispatch(changeAllCheckedStatusAction(isAllChecked, checkedIdList));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(EventList, styles));