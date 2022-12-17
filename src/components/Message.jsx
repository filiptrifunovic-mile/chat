import React from "react";
import Img from "../img/1.jpg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Img} alt="imageAvatar" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Img} alt="avatarImage" />
      </div>
    </div>
  );
};

export default Message;
