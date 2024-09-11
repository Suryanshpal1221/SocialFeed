import { useState } from "react";
import styles from "./SideBar.module.css";
import { IconWrapper } from "..";
import { icons } from "../IconWrapper/Icons";

function SideBar() {
  const [show, setShow] = useState<boolean>(false);

  const handleShowmore = () => {
    setShow(!show);
  };
  return (
    <div className={styles.main}>
      <div className={styles.activities}>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} />
          <text>Feed</text>
        </div>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} />
          <text>Feed</text>
        </div>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} />
          <text>Feed</text>
        </div>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} />
          <text>Feed</text>
        </div>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} /> <text>Feed</text>
        </div>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} /> <text>Feed</text>
        </div>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} /> <text>Feed</text>
        </div>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} /> <text>Feed</text>
        </div>
        <div className={styles.activity}>
          <IconWrapper Icon={icons.mdrssfeed} size={24} /> <text>Feed</text>
        </div>
        {show && (
          <>
            <div className={styles.activity}>
              <IconWrapper Icon={icons.mdrssfeed} size={24} /> <text>Feed</text>
            </div>
            <div className={styles.activity}>
              <IconWrapper Icon={icons.mdrssfeed} size={24} /> <text>Feed</text>
            </div>
            <div className={styles.activity}>
              <IconWrapper Icon={icons.mdrssfeed} size={24} /> <text>Feed</text>
            </div>
          </>
        )}
        <button className={styles.button} onClick={handleShowmore}>
          {show ? "Show Less" : "Show More"}
        </button>
      </div>
      <div className={styles.profiles}>
        <text>Hello</text>
        <text>Hello</text>
        <text>Hello</text>
        <text>Hello</text>
        <text>Hello</text>
        <text>Hello</text>
      </div>
    </div>
  );
}

export default SideBar;
