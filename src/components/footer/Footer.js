import CssModules from 'react-css-modules';
import styles from './footer.module.scss';
import { Button } from "antd";
import { UndoOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <Button>
        <NavLink to='/'>
            全部
        </NavLink>
      </Button>
      <Button>
        <NavLink to='/completed'>
            已完成
        </NavLink>
      </Button>
      <Button>
        <NavLink to='/unCompleted'>
            未完成
        </NavLink>
      </Button>
      <UndoOutlined />
    </div>
  ); 
}

export default CssModules(Footer, styles);