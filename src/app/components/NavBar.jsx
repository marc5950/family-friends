import { CiHome } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="nav-bar bg-nav fixed bottom-0 w-full max-w-(--mobile) py-4 backdrop-blur-lg">
      <nav className="mx-auto flex w-full max-w-(--mobile) justify-around px-5">
        <CiHome className="text-primary active hover:text-primary h-6 w-6 cursor-pointer stroke-1 transition-all duration-300" />
        <FaRegStar className="text-nav-icon hover:text-primary h-6 w-6 cursor-pointer stroke-2 transition-all duration-300" />
        <FiMessageCircle className="text-nav-icon hover:text-primary h-6 w-6 cursor-pointer stroke-2 transition-all duration-300" />
        <FiUser className="text-nav-icon hover:text-primary h-6 w-6 cursor-pointer stroke-2 transition-all duration-300" />
      </nav>
    </div>
  );
};

export default Navbar;
