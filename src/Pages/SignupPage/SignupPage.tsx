import styles from "./SignupPage.module.css";
import { Input } from "../../Components/index";

function SignupPage() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.add}>
          <h1>SocialFeed</h1>
          <h2>Connect with friends and the world around you on SocialFeed.</h2>
        </div>
        <div className={styles.loginCard}>
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Password Again" />
          <button className={styles.btn1}>Sign up</button>
          <button className={styles.btn2}>Log into Account</button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
