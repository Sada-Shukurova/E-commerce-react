// icons
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { CiUser } from "react-icons/ci";

// auth login
import { useAuth0 } from "@auth0/auth0-react";

// style
import "./nav.css";
import Routing from "../Routing";

const Nav = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
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
        {isAuthenticated ? (
          //Logout
          <div className="user">
            <div className="icon">
              <FiLogOut />
            </div>
            <div className="btn">
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          //Login
          <div className="user">
            <div className="icon">
              <FiLogIn />
            </div>
            <div className="btn">
              <button onClick={() => loginWithRedirect()}>Login</button>
            </div>
          </div>
        )}
      </div>
      {/* LAST HEADER */}
      <div className="last_header">
        <div className="user_profile">
          {
            //user profile
            isAuthenticated ? (
              <>
                <div className="icon">
                  <CiUser />
                </div>
                <div className="info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className="icon">
                  <CiUser />
                </div>
                <div className="info">
                  <p>Guest</p>
                </div>
              </>
            )
          }
        </div>
        <div className="nav">
          <Routing />
        </div>
        <div className="offer">
          <p>flat 10% over all Iphone</p>
        </div>
      </div>
    </header>
  );
};

export default Nav;
