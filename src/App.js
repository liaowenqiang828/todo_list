import Header from './components/header/Header';
import CssModules from 'react-css-modules';
import styles from './app.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default CssModules(App, styles);
