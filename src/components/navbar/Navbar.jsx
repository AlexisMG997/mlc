import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo" id="logos">
              MLC
            </span>
          </Link>
        </div>

        <div className="items">
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
