// icons
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

// style
import "./nav.css";

const Nav = () => {
  return (
    // HEADER
    <header className="header">
      <div className="top_header">
        <div className="icon">
          <MdLocalShipping />
        </div>
        <div className="info">
          <p>Free Shipping When Shopping upto $1000</p>
        </div>
      </div>
      <div className="mid_header">
        <div className="logo">
          <img src="image/logo.webp" alt="logo" />
        </div>
        <div className="search_box">
          <input type="text" value="" placeholder="search..." />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <div className="user">
          <div className="icon">
            <FiLogIn />
          </div>
          <div className="btn">
            <button>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
