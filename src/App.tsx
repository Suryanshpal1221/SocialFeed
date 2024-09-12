import styles from "./App.module.css";
import { Homepage, LoginPage, SignupPage } from "./Pages";

function App() {
  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  );
}

export default App;
