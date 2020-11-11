import CssModules from 'react-css-modules';
import styles from './header.module.scss';
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons';

function Header() {
  return (
    <div className={styles.header}>
      <UnorderedListOutlined className={styles.homeList}/>
      <h2>Todo List Page</h2>
      <div className={styles.search}>
        <input placeholder='输入事件名称' className={styles.searchInput}/>
        <SearchOutlined className={styles.searchButton}/>
      </div>
    </div>
  );
}
export default CssModules(Header, styles);