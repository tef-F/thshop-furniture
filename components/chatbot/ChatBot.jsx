"use client"
import { AiOutlineClose, AiOutlineMessage, AiOutlineSend } from "react-icons/ai"
import "./chatbot.css"
import { BsRobot } from 'react-icons/bs'
import { useEffect, useState } from "react";

const ChatBot = () => {
    // const [showChatbot, setShowChatbot] = useState(false);

    // const toggleChatbot = () => {
    //     setShowChatbot(!showChatbot);
    // };

    useEffect(() => {
        (function(d, m){
            var kommunicateSettings = {
                "appId": "1d84498d632e4534b0a4c0b6118313c2",
                "popupWidget": true,
                "automaticChatOpenOnNavigation": true
            };
            var s = document.createElement("script");
            s.type = "text/javascript";
            s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0];
            h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
          })(document, window.kommunicate || {});
    },[])

    return (
        <div></div>
        // <div className={`${showChatbot ? 'show-chatbot' : ''}`}>
        //     <button className="chatbot-toggler" onClick={toggleChatbot}>
        //         <span className="material-symbols-outline">  
        //             {showChatbot ? <AiOutlineClose /> : <AiOutlineMessage />}
        //         </span>
        //     </button>
        //     <div className="chatbot">
        //         <header>
        //             <h2>Chatbot</h2>
        //         </header>
        //         <ul className="chatbox">
        //             <li className="chat incoming">
        //                 <span className="material-symbols-outline"><BsRobot /></span>
        //                 <p>Xin chào <br/> Tôi có thể giúp gì cho bạn</p>
        //             </li>
        //             <li className="chat outcoming">
        //                 <p>Lorem ipsum dolor sit amet consectetur adip</p>
        //             </li>
        //         </ul>
        //         <div className="chat-input">
        //             <textarea placeholder="Enter a message" required></textarea>
        //             <span id="send-btn" className="material-symbols-outline"><AiOutlineSend /></span>
        //         </div>
        //     </div>
        // </div>
    )
}

export default ChatBot