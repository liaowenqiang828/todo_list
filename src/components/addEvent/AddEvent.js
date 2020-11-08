import React, { Component } from 'react';
import { Button, Input } from 'antd';
import "./addEvent.css";
import { connect } from "react-redux";
import eventInputActionCreator from '../../store/action/eventInputActionCreator';
import addEventData from '../../store/action/eventAddAction';

class AddButton extends Component {

    updateInputValue = (e) => {
        this.props.eventInputAction(e.target.value);
    }

    addEvent = () => {
        this.props.addEvent(this.props.inputValue);
        this.props.eventInputAction('');
    }

    render() {
        return (
            <div className='addEvent'>
                <Input 
                    value={this.props.inputValue}
                    placeholder='请输入事件名称'
                    onChange={e => this.updateInputValue(e)}
                />
                <Button
                    type='primary'
                    onClick={this.addEvent}
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
            dispatch(eventInputActionCreator(inputValue));
        },

        addEvent: (eventValue) => {
            dispatch(addEventData(eventValue));
        }
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(AddButton);



