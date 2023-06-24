import MainContent from "./components/mobileApp";
import MainHeader from "./components/header";
import SideDrawer from "./components/sidebar";

import styles from "./layout.module.css";

function App() {
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <div className={styles.container}>
      <section className={styles.leftContainer}>
        <SideDrawer />
      </section>
      <section className={styles.rightContainer}>
        <MainHeader />
        <MainContent />
      </section>
    </div>
  );
}

export default App;
