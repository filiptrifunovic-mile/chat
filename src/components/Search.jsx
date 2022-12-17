import React from "react";
import image from "../img/1.jpg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
        <div className="userChat">
          <img src={image} alt="avatar" />
          <div className="userChatInfo">
            <span>Jannis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
