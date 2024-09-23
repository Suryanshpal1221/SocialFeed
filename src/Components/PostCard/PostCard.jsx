import { CircularAvatar, IconWrapper } from "../index.js";
import styles from "./PostCard.module.css";
import { icons } from "../IconWrapper/Icons.js";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.postInfo}>
          <CircularAvatar
            url="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid"
            size={28}
          />
          <span className={styles.name}>Ritesh Jamwal</span>
          <span className={styles.time}>5 mins ago</span>
        </div>
        <IconWrapper Icon={icons.sloptionsvertical} />
      </div>
      <div className={styles.caption}>
        <span className={styles.captionText}>
          Love For All, Hatred For None.
        </span>
      </div>
      <div className={styles.image}>
        <img
          src="https://www.visitdubai.com/-/media/gathercontent/article/g/guide-to-dubai-metro/fallback-image/guide-to-dubai-metro-hero-gettyimages.jpg"
          alt="Metro"
        />
      </div>
      <div className={styles.react}>
        <div>
          <IconWrapper Icon={icons.fathumsup} size={20} />
          <span>99 people liked your post</span>
        </div>
        <div>
          <IconWrapper Icon={icons.faregcommentdots} size={20} />
          <span>12 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
