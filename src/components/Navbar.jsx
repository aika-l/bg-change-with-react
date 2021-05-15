import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h5>Color Flipper</h5>
      <section>
        <Link to="/">
          <button>Simple</button>
        </Link>
        <Link to="/hex">
          <button>Hex</button>
        </Link>
      </section>
    </nav>
  );
};
export default Navbar;
