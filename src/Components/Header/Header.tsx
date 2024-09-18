import { CustomInput, IconWrapper, CircularAvatar } from "../index";
import { icons } from "../IconWrapper/Icons";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.main}>
      <text className={styles.appIcon}>SocialFeed</text>
      <div className={styles.middle}>
        <CustomInput />
        <div className={styles.pages}>
          <text>Homepage</text>
          <text>Timeline</text>
        </div>
      </div>
      <div className={styles.iconCont}>
        <div className={styles.icons}>
          <IconWrapper Icon={icons.fauserlarge} size={16} />
          <IconWrapper Icon={icons.mdmessage} size={20} />
          <IconWrapper Icon={icons.bsbellfill} size={16} />
        </div>
        <div className={styles.displayProfile}>
          <CircularAvatar
            size={32}
            url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
