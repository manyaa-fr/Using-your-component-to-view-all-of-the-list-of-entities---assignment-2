import React, { useState } from "react";
import '../index.css';
import LikeButton from "./likebutton";

function Postcard({id, profileImage, username, content, isLiked}){
    return (
        <div className="container">
            <h2>{id}</h2>
            <img src={profileImage} alt="Profile-Image" className="profile-pic"/>
            <h2>{username}</h2>
            <p>{content}</p>
            <LikeButton isLiked={isLiked}/>
        </div>
    )
}

export default Postcard;