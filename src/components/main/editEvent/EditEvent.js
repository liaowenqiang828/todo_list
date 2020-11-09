import React, {useState} from 'react';
import { Modal, Form, Button, Input } from 'antd';

const EditForm = (props) => {
    return (
        <Modal
            visible={props.visible}
            title='Event Edit'
            okText='确认'
            cancelText='取消'
            onCancel={props.onCancel}
            onOk={props.onOk}
        >
            <Form
            >
                <Form.Item
                >
                    <Input 
                        type='text'
                    />
                </Form.Item>
            </Form>

        </Modal>
    );
};

const EditEvent = () => {
    const [visible, setVisible] = useState(false);

    const onOk = () => {
        setVisible(false);
    };

    const onCancel = () => {
        setVisible(false);
        console.log(visible);
    }

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
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
            />
        </div>
    )
}

export default EditEvent;