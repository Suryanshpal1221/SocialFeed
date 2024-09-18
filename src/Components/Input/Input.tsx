import styles from "./Input.module.css";
import React, { ChangeEvent } from "react";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type = "text",
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
