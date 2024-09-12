import { IconWrapper } from "../index";
import { IconType } from "react-icons";
import styles from "./IconText.module.css";

interface IconTextProps {
  Icon: IconType;
  text?: String;
  size?: number;
  color?: string;
}

const IconText: React.FC<IconTextProps> = ({ Icon, text, size, color }) => {
  return (
    <div className={styles.main}>
      <IconWrapper Icon={Icon} size={size} color={color} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default IconText;
