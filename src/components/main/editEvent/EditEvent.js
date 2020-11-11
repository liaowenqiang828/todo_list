import React, { useState } from 'react';
import { Modal, Form, Button, Input } from 'antd';
import axios from 'axios';

const EditForm = (props) => {
  const { onCancel, onOk, originInput, id } = props;

  const [inputValue, setInputValue] = useState(originInput);
  const [form] = Form.useForm();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    form.setFieldsValue({
      eventInput: e.target.value,
    });
  };

  return (
    <Modal
      visible={props.visible}
      title='Event Edit'
      okText='确认'
      cancelText='取消'
      onCancel={onCancel}
      onOk={() => {
        const timeStamp = Date.now();
        const newEvent = form.getFieldValue('eventInput');
        axios({
          url: 'http://localhost:8080/event',
          method: 'PATCH',
          params: {
            id,
            detail: newEvent,
            timeStamp
          }
        })
          .then(() => {
            onOk();
          });
      }}
    >
      <Form
        form={form}
      >
        <Form.Item>
          <Input 
            name='event'
            type='text'
            value={inputValue}
            onChange={handleInputChange.bind(this)}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const EditEvent = (props) => { 
  const { originInput, id } = props;
  const [visible, setVisible] = useState(false);

  const onOk = () => {
    setVisible(false);
  };

  const onCancel = () => { 
    setVisible(false); 
  };

  return (
    <div>
      <Button 
        onClick={() => {
          setVisible(true);
        }}
      >
        编辑
      </Button>
      <EditForm
        id={id}
        originInput={originInput}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
      />
    </div>
  );
};

export default EditEvent;