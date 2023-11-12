"use client"
import { AiOutlineClose, AiOutlineMessage, AiOutlineSend } from "react-icons/ai"
import "./chatbot.css"
import { BsRobot } from 'react-icons/bs'
import { useState } from "react";

const ChatBot = () => {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <div className={`${showChatbot ? 'show-chatbot' : ''}`}>
            <button className="chatbot-toggler" onClick={toggleChatbot}>
                <span className="material-symbols-outline">  
                    {showChatbot ? <AiOutlineClose /> : <AiOutlineMessage />}
                </span>
            </button>
            <div className="chatbot">
                <header>
                    <h2>Chatbot</h2>
                </header>
                <ul className="chatbox">
                    <li className="chat incoming">
                        <span className="material-symbols-outline"><BsRobot /></span>
                        <p>Xin chào <br/> Tôi có thể giúp gì cho bạn</p>
                    </li>
                    <li className="chat outcoming">
                        <p>Lorem ipsum dolor sit amet consectetur adip</p>
                    </li>
                </ul>
                <div className="chat-input">
                    <textarea placeholder="Enter a message" required></textarea>
                    <span id="send-btn" className="material-symbols-outline"><AiOutlineSend /></span>
                </div>
            </div>
        </div>
    )
}

export default ChatBot