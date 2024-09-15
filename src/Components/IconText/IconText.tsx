import { IconWrapper } from "../index";
import { IconType } from "react-icons";
import styles from "./IconText.module.css";

interface IconTextProps {
  Icon: IconType;
  text?: String;
  size?: number;
  color?: string;
  onClick?: () => void;
}

const IconText: React.FC<IconTextProps> = ({
  Icon,
  text,
  size,
  color,
  onClick,
}) => {
  return (
    <div className={styles.main} onClick={onClick}>
      <IconWrapper Icon={Icon} size={size} color={color} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default IconText;
