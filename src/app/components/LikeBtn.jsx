"use client";

import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

const LikeBtn = ({ liked }) => {
  const [isLiked, setIsLiked] = useState(liked);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-primary hover:text-background col-1 row-1 m-2 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center justify-self-end rounded-full bg-[#ffffff40] backdrop-blur-sm transition-all duration-300"
    >
      <div
        key={isLiked ? "liked" : "not-liked"}
        style={{
          animation: "scaleIn 0.2s ease-in-out",
        }}
      >
        {isLiked ? (
          <FaStar className="text-background" />
        ) : (
          <FaRegStar className="text-background" />
        )}
      </div>
    </button>
  );
};

export default LikeBtn;
