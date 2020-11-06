import CssModules from 'react-css-modules';
import styles from './footer.module.scss';
import { Button } from "antd";
import { UndoOutlined } from "@ant-design/icons";

function Footer(props) {
    return (
        <div className={styles.footer}>
            <Button>全部</Button>
            <Button>已完成</Button>
            <Button>未完成</Button>
            <UndoOutlined />
        </div>
    )
}

export default CssModules(Footer, styles);