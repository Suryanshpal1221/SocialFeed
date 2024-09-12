import { CircularAvatar } from "..";
import styles from "./FriendCard.module.css";

interface FriendCardProps {
  online?: boolean;
}

const FriendCard: React.FC<FriendCardProps> = ({ online = false }) => {
  return (
    <div className={styles.friend}>
      {online && <div className={styles.greendot} />}
      <CircularAvatar
        url="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        size={32}
      />
      <span>Anurag Verma</span>
    </div>
  );
};

export default FriendCard;
