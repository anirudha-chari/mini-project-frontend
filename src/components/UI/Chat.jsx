import React from "react";
import "../../styles/chatStyle.css";

class Chat extends React.Component {
    render() {
        return <div className="chat">
            {this.props.messages.map(msg => {
                return <div className={msg.type === "user" ? "msg-user" : "msg-bot"}>
                    {msg.message}
                </div>
            })}
        </div>
    }
}

export default Chat;