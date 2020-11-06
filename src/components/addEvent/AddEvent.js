import React, { Component } from 'react';
import { Button, Input } from 'antd';
import styles from "./addEvent.css";
import { connect } from "react-redux";
import eventInputActionCreator from '../../store/action/eventInputActionCreator';

class AddButton extends Component {

    updateInputValue = (e) => {
        this.props.eventInputAction(e.target.value)
    }

    render() {
        return (
            <div className={styles.addEvent}>
                <Input 
                    placeholder='请输入事件名称'
                    onChange={e => this.updateInputValue(e)}
                />
                <Button
                    type='primary'
                >
                    添加事件
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        eventInputAction: (inputValue) =>  {
            dispatch(eventInputActionCreator(inputValue))
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);



