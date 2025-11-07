import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <div className="mt-10 flex w-full max-w-(--mobile) justify-between">
      <h1 className="text-lg/[120%] font-extrabold tracking-[-0.9px]">
        FamilyFriends
      </h1>
      <IoIosNotificationsOutline className="h-6 w-6 stroke-2" />
    </div>
  );
};

export default Header;
