import React from "react";
import image from "../img/1.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={image} alt="avatar" />
        <div className="userChatInfo">
          <span>Jannis</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={image} alt="avatar" />
        <div className="userChatInfo">
          <span>Jannis</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={image} alt="avatar" />
        <div className="userChatInfo">
          <span>Jannis</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={image} alt="avatar" />
        <div className="userChatInfo">
          <span>Jannis</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
