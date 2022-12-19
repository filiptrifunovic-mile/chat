import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import Img from "../img/1.jpg";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div className="message owner">
      {/* <div className="messageInfo">
        <img src={Img} alt="imageAvatar" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={Img} alt="avatarImage" />
      </div> */}
    </div>
  );
};

export default Message;
