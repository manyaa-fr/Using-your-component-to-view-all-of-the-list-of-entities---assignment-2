import React, { useState } from "react";
import '../index.css';

function LikeButton({isLiked}){

    const [isOn, setisOn] = useState(isLiked);

    return (
        <button onClick={() => setisOn(!isOn)}
        className={`toggleButton ${isOn? "true" : "false"}`}
        >
            Like ♡
        </button>
    )
}

export default LikeButton;