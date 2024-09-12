import styles from "./Input.module.css";

interface InputProps {
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: () => void;
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
