import styles from "./Homepage.module.css";
import {
  SideBar,
  PostingCard,
  PostCard,
  IconWrapper,
  FriendCard,
  Header,
} from "../../Components";
import { icons } from "../../Components/IconWrapper/Icons";

function Homepage() {
  return (
    <div>
      <Header />
      <div className={styles.section1}>
        <SideBar />
        <div className={styles.contentContainer}>
          <div className={styles.leftGrid}>
            <PostingCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
          <div className={styles.rightGrid}>
            <div className={styles.birthday}>
              <IconWrapper Icon={icons.facakecandles} size={32} />
              <div>
                <span>Anurag</span> and <span>3 other friends</span> have a
                Birthday today.Wish them happy birthday.
              </div>
            </div>
            <div className={styles.img}>
              <img
                src="https://www.lightxeditor.com/app/wp-content/uploads/2021/03/how-to-put-image-inside-text.jpg"
                alt="Wildlife"
              />
            </div>
            <div className={styles.title}>Online Friends</div>
            <div className={styles.onlineFr}>
              <FriendCard online={true} />
              <FriendCard online={true} />
              <FriendCard online={true} />
              <FriendCard online={true} />
              <FriendCard online={true} />
              <FriendCard online={true} />
              <FriendCard online={true} />
              <FriendCard online={true} />
              <FriendCard online={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
