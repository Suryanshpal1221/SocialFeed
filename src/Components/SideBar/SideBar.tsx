import { useState } from "react";
import styles from "./SideBar.module.css";
import { IconText, FriendCard } from "..";
import { icons } from "../IconWrapper/Icons";

function SideBar() {
  const [show, setShow] = useState<boolean>(false);

  const handleShowmore = () => {
    setShow(!show);
  };
  return (
    <div className={styles.main}>
      <div className={styles.activities}>
        {icons.sidebaricons.map((item, index) => {
          return (
            <IconText
              Icon={icons.sidebaricons[index]}
              size={24}
              text={arr[index]}
            />
          );
        })}

        {show && (
          <>
            <IconText Icon={icons.mdrssfeed} size={24} text="Feed" />
          </>
        )}
        <button className={styles.button} onClick={handleShowmore}>
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className={styles.profiles}>
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
        <FriendCard />
      </div>
    </div>
  );
}

const arr = [
  "Feed",
  "Chats",
  "Videos",
  "Groups",
  "Bookmarks",
  "Questions",
  "Jobs",
  "Events",
  "Courses",
];

export default SideBar;
