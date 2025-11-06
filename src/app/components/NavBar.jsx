import { CiHome } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 flex w-full justify-around py-4 shadow-md">
      <CiHome />
      <FaRegStar />
      <FiMessageCircle />
      <FiUser />
    </nav>
  );
};

export default Navbar;
