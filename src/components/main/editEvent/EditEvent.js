import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { changeModalVisibleActionCreator, 
  modalInputActionCreator } from '../../../store/action/actionCreators';
import EditForm from '../editForm/EditForm';

class EditEvent extends Component { 
  constructor(props) {
    super(props);
  }

  onOk = () => {
    this.props.changeModalVisible();
  };

  onCancel = () => { 
    this.props.changeModalVisible();
  };

  abandomButtonBlurAfterClick = (e) => {
    let target = e.target;
    if (target.nodeName === 'SPAN') {
      target = e.target.parentNode;
    }

    target.blur();
  };

  handleButtonClick = (e) => {
    this.props.changeModalVisible();
    this.props.modalInputChange(this.props.originInput);
    this.abandomButtonBlurAfterClick(e);
  };

  render() {
    const { id, visible } = this.props;
    return (
      <div>
        <Button 
          onClick={ this.handleButtonClick }
        >
          编辑
        </Button>
        <EditForm
          id={id}
          visible={visible}
          onOk={this.onOk}
          onCancel={this.onCancel}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    visible: state.visible,
    modalInput: state.modalInput
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeModalVisible: () => {
      dispatch(changeModalVisibleActionCreator());
    },
    modalInputChange: (modalInput) => {
      dispatch(modalInputActionCreator(modalInput));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);