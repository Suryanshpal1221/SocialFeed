import { useState, ChangeEvent } from "react";
import styles from "./SignupPage.module.css";
import { Input } from "../../Components/index";
import { useSelector } from "react-redux";
import { RootState } from "../../Store/Store";
import { useAuth } from "../../Hooks/Login/hooks";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confPassword, setConfPassword] = useState<string>("");
  const [passErr, setPassErr] = useState<boolean>(false);

  const { isLoading, error, data } = useSelector(
    (state: RootState) => state.signup
  );

  const handleSignup = () => {
    signup(username, email, confPassword);
  };
  const handleLogin = () => {
    navigate("/");
  };

  const handleConfPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfPassword(e.target.value);
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
            placeholder="Email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setEmail(e.target.value)
            }
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setPassword(e.target.value)
            }
          />
          <Input
            placeholder="Password Again"
            value={confPassword}
            onChange={handleConfPassword}
          />
          {passErr && <div>Enter same password.</div>}

          <button className={styles.btn1} onClick={handleSignup}>
            {isLoading ? "Loading..." : "Sign up"}
          </button>
          <button className={styles.btn2} onClick={handleLogin}>
            Log into Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
