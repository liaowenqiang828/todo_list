import CssModules from 'react-css-modules';
import styles from './header.module.scss';

function Header(props) {
    return (
        <div className={styles.header}>
            hello world
        </div>
    )
}
export default CssModules(Header, styles);