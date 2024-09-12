import { Input } from "../../Components/index";
import styles from "./LoginPage.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.add}>
          <h1>SocialFeed</h1>
          <h2>Connect with friends and the world around you on SocialFeed.</h2>
        </div>
        <div className={styles.loginCard}>
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <button className={styles.btn1}>Login</button>
          <span className={styles.forgotText}>Forgot Password?</span>
          <button className={styles.btn2}>Create new Account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
