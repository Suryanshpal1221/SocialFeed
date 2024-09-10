import { CustomInput } from "../index";
import "./Header.css";
import { FaUserLarge } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { BsBellFill } from "react-icons/bs";

function Header() {
  return (
    <div className="main">
      <text className="appIcon">Social Feed</text>
      <div className="middle">
        <CustomInput />
        <div className="pages">
          <text>Homepage</text>
          <text>Timeline</text>
        </div>
        <div className="iconCont">
          <div className="icons">
            <FaUserLarge size={16} />
            <MdMessage size={20} />
            <BsBellFill size={16} />
          </div>
          <div className="displayProfile">
            <FaUserLarge size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
