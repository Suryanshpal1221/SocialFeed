import { useState } from "react";
import styles from "./SignupPage.module.css";
import { Input } from "../../Components/index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../Slice/Login/signupSlice";

function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error, data } = useSelector((state) => state.signup);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [passErr, setPassErr] = useState(false);

  const handleSignup = () => {
    if (username && email && password && password === confPassword) {
      dispatch(signup(username, email, password));
    }
  };
  const handleLogin = () => {
    navigate("/");
  };

  const handleConfPassword = (e) => {
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
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Input
            placeholder="Confirm Password"
            value={confPassword}
            onChange={handleConfPassword}
            type="password"
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
