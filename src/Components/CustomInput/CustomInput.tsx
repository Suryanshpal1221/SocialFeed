import "./CustomInput.css";
import { IoMdSearch } from "react-icons/io";

function CustomInput() {
  return (
    <div className="container">
      <div className="icon">
        <IoMdSearch size={20} color="black" />
      </div>
      <input
        type="text"
        className="input"
        placeholder="Search for friend, post or video"
      />
    </div>
  );
}

export default CustomInput;
