import React, { createContext, useContext, useState } from 'react';

//context
const LikeContext = createContext();

//custom hook
export const useLikeContext = () => {
  return useContext(LikeContext);
};


//provider
export const LikeProvider = ({ children }) => {
  const [likes, setLikes] = useState({});

  const toggleLike = (blogId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [blogId]: !prevLikes[blogId],
    }));
  };

  return (
    <LikeContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
};

export default LikeProvider;
