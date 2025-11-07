"use client";

import { createContext, useContext, useState } from "react";

const LikeContext = createContext();

export const LikeProvider = ({ children }) => {
  // State holder liked dyr som et objekt med slug som key
  const [likedAnimals, setLikedAnimals] = useState({});

  const toggleLike = (slug) => {
    setLikedAnimals((prev) => ({
      ...prev,
      [slug]: !prev[slug], // Toggle true/false/undefined
    }));
  };

  const isLiked = (slug) => {
    return likedAnimals[slug] || false;
  };

  return (
    <LikeContext.Provider value={{ likedAnimals, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
};

export const useLike = () => {
  const context = useContext(LikeContext);
  if (!context) {
    throw new Error("useLike must be used within a LikeProvider");
  }
  return context;
};
