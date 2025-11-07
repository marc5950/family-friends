"use client";

import { FaRegStar, FaStar } from "react-icons/fa";
import { useLike } from "../context/LikeContext";

const LikeBtn = ({ slug, className = "" }) => {
  const { isLiked, toggleLike } = useLike();
  const liked = isLiked(slug);

  const handleClick = (e) => {
    e.preventDefault(); // Forhindrer link navigation hvis knappen er i et link
    e.stopPropagation();
    toggleLike(slug);
  };

  return (
    <button
      onClick={handleClick}
      className={`hover:bg-primary hover:text-background col-1 row-1 flex h-6 w-6 shrink-0 cursor-pointer items-center justify-center justify-self-end rounded-full bg-[#ffffff40] backdrop-blur-sm transition-all duration-300 ${className}`}
    >
      <div
        key={liked ? "liked" : "not-liked"}
        style={{
          animation: "scaleIn 0.2s ease-in-out",
        }}
      >
        {liked ? (
          <FaStar className="text-background" />
        ) : (
          <FaRegStar className="text-background" />
        )}
      </div>
    </button>
  );
};

export default LikeBtn;
