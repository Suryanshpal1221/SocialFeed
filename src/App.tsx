import { Header, SideBar, PostingCard } from "./Components";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.section1}>
        <SideBar />
        <div className={styles.contentContainer}>
          <div className={styles.leftGrid}>
            <PostingCard />
          </div>
          <div className={styles.rightGrid}>Hello</div>
        </div>
      </div>
    </>
  );
}

export default App;
