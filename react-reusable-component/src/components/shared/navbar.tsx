import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-purple-300 py-2 px-10">
      <nav>
        <ul className="flex items-center gap-6">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about-us"}>
            <li>About us</li>
          </Link>
          <Link to={"/admin"}>
            <li>Admin</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
