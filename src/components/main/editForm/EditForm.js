import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Form, Input } from 'antd';
import { editEvent } from '../../../store/action/actions';
import { modalInputActionCreator, 
  changeModalVisibleActionCreator } from '../../../store/action/actionCreators';

class EditForm extends Component {
  constructor(props) {
    super(props);
  }

  handleInputChange = (e) => {
    this.props.modalInputChange(e.target.value);
  };

  handleNewEventPatch = (id, newEvent, timeStamp) => {
    this.props.editEvent(id, newEvent, timeStamp);
  };
  
  render() {
    const { onCancel, onOk, id, modalInput, visible, newEventPatch } = this.props;
    return (
      <Modal
        visible={visible}
        title='Event Edit'
        okText='确认'
        cancelText='取消'
        onCancel={onCancel}
        onOk={() => {
          const timeStamp = Date.now();
          newEventPatch(id, modalInput, timeStamp);
          onOk();
        }}
      >
        <Form>
          <Form.Item>
            <Input 
              name='event'
              type='text'
              value={modalInput}
              onChange={this.handleInputChange.bind(this)}
            />
          </Form.Item>
        </Form>
      </Modal>
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

    newEventPatch: (id, newEvent, timeStamp) => {
      dispatch(editEvent(id, newEvent, timeStamp));
    }
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
  