import styles from "./App.module.css";
// import Homepage from "./Pages/Homepage/Homepage";
import { LoginPage } from "./Pages";

function App() {
  return (
    <div className={styles.container}>
      <LoginPage />
    </div>
  );
}

export default App;
