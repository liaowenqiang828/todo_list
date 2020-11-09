import React, {useState} from 'react';
import { Modal, Form, Button, Input } from 'antd';

const EditForm = (props) => {
    const {onCancel, onOk, originInput} = props;
    return (
        <Modal
            visible={props.visible}
            title='Event Edit'
            okText='确认'
            cancelText='取消'
            onCancel={onCancel}
            onOk={onOk}
        >
            <Form
            >
                <Form.Item
                >
                    <Input 
                        type='text'
                        value={originInput}
                    />
                </Form.Item>
            </Form>

        </Modal>
    );
};

const EditEvent = (props) => {
    const {originInput} = props;
    const [visible, setVisible] = useState(false);

    const onOk = () => {
        setVisible(false);
    };

    const onCancel = () => {
        setVisible(false);
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
                originInput={originInput}
                visible={visible}
                onOk={onOk}
                onCancel={onCancel}
            />
        </div>
    )
}

export default EditEvent;