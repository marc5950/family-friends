import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const ReturnBtn = () => {
  return (
    <Link
      className="hover:bg-primary bg-background group col-1 row-1 m-5 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300"
      href="/"
    >
      <IoIosArrowBack className="text-dark group-hover:text-background transition-colors duration-300" />
    </Link>
  );
};

export default ReturnBtn;
