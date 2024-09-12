import { CircularAvatar, IconWrapper } from "..";
import styles from "./PostingCard.module.css";
import { IconType } from "react-icons";
import { icons } from "../IconWrapper/Icons";

interface AttachmentCompProps {
  Icon: IconType;
  size?: number;
  color?: string;
  text?: string;
}

const AttachmentComp: React.FC<AttachmentCompProps> = ({
  Icon,
  size,
  color,
  text,
}) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <IconWrapper Icon={Icon} size={size} color={color} />
      <span
        style={{
          fontSize: 12,
          fontFamily: "sans-serif",
          fontWeight: "500",
          marginLeft: 2,
        }}
      >
        {text}
      </span>
    </div>
  );
};

function PostingCard() {
  return (
    <div className={styles.container}>
      <div className={styles.inputSection}>
        <CircularAvatar
          url="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
          size={40}
        />
        <h5>What's in your mind?</h5>
      </div>
      <div className={styles.attachmentsSection}>
        <div className={styles.attachmentComp}>
          <AttachmentComp
            Icon={icons.mdvideolibrary}
            size={20}
            text="Photo or Video"
            color="#FF7043"
          />
          <AttachmentComp
            Icon={icons.pitagsimplefill}
            size={20}
            text="Tag"
            color="blue"
          />
          <AttachmentComp
            Icon={icons.falocationdot}
            size={20}
            text="Location"
            color="green"
          />
          <AttachmentComp
            Icon={icons.mdemojiemotions}
            size={20}
            text="Feelings"
            color="#FDD835"
          />
        </div>
        <button className={styles.btn}>Share</button>
      </div>
    </div>
  );
}

export default PostingCard;
