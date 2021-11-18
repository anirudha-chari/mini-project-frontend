import React from "react";
import "../../styles/chatStyle.css";
import ChatbotAPI from "../../data/ChatbotAPI";

class Chat extends React.Component {
    render() {
        return <div className="chat">
            {this.props.messages.map(msg => {
                return <div className={msg.type === "user" ? "msg-user" : "msg-bot"}>
                    {msg.message}
                </div>
            })}
            <div>
                <div style={{fontSize: "14px", fontWeight: "bold"}}>Suggestions</div>
                <ul>
                    {ChatbotAPI.chatbotData.map(data => {
                        return <li style={{fontSize: "14px"}}>{data.question}</li>
                    })}
                </ul>
            </div>
        </div>
    }
}

export default Chat;