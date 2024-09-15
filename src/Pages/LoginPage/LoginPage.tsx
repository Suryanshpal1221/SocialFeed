import { Input } from "../../Components/index";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { useAuth } from "../../Hooks/Login/hooks";
import { useState, ChangeEvent } from "react";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { isLoading, error, data } = useSelector(
    (state: RootState) => state.login
  );

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    login(username, password);
  };
  const handleForgotPassword = () => {
    console.log("errorrr", error);
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.add}>
          <h1>SocialFeed</h1>
          <h2>Connect with friends and the world around you on SocialFeed.</h2>
        </div>
        <div className={styles.loginCard}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setUsername(e.target.value)
            }
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setPassword(e.target.value)
            }
          />
          <button className={styles.btn1} onClick={handleLogin}>
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <span className={styles.forgotText} onClick={handleForgotPassword}>
            Forgot Password?
          </span>
          <button className={styles.btn2} onClick={handleSignup}>
            Create new Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
