import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const ReturnBtn = () => {
  return (
    <Link
      className="hover:bg-primary hover:text-background bg-background col-1 row-1 m-2 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300"
      href="/"
    >
      <IoIosArrowBack className="text-dark" />
    </Link>
  );
};

export default ReturnBtn;
