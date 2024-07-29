import PropTypes from "prop-types";
import "./Navbar.css";

function Navbar({ links }) {
  return (
    <>
      <nav>
        <img src="../public/logoW.svg" alt="logoW" className="logo" />
        <ul className="navegacion">
          {links.map((link, index) => (
            <li key={index} className="navbar">
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.prototype = {
  links: PropTypes.arrayOf(PropTypes.string).isRequired,
};
