import React from 'react';
import CssModules from 'react-css-modules';
import styles from './Main.module.scss';


function Main(props) {
        return (
            <div className={styles.main}>
            </div>
        )
}

export default CssModules(Main, styles);