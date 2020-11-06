import { Button, Input } from 'antd';
import CssModules from 'react-css-modules';
import styles from "./addEvent.module.scss";

function AddButton(props) {
    return (
        <div className={styles.addEvent}>
            <Input 
                placeholder='请输入事件名称'
                className={styles.eventInput}
            />
            <Button
                className={styles.AddButton}
                type='primary'
            >
                添加事件
            </Button>
        </div>
    )
}

export default CssModules(AddButton, styles);