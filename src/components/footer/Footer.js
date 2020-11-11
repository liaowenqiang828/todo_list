import CssModules from 'react-css-modules';
import styles from './footer.module.scss';
import { UndoOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

function Footer() {

  return (
    <div className={styles.footer}>
      <NavLink 
        to='/'
        exact
        activeClassName={styles.active}
      >
        全部
      </NavLink>
      <NavLink 
        to='/completed'
        activeClassName={styles.active}
      >
        已完成
      </NavLink>
      <NavLink 
        to='/unCompleted'
        activeClassName={styles.active}
      >
        未完成
      </NavLink>
      <UndoOutlined />
    </div>
  ); 
}

export default CssModules(Footer, styles);