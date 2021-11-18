import React, {createRef} from "react";
import Chat from "./Chat";
import "../../styles/chatbotStyle.css";

const chatResponses = [{"message":"Hi! How may I help you?", "type":"bot"}]
const botResponses = [{"message":"Hi","type":"bot"}, {"message":"Hello","type":"bot"}]

class Chatbot extends React.Component {
    constructor() {
        super()
        this.inputRef = createRef()
        this.state = {
            displayChat : false,
            messages : chatResponses
        }
    }
    toggleChat() {
        this.setState({
            displayChat : !this.state.displayChat
        })
    }
    handleInput() {
        let inMsg = this.inputRef.current.value
        if(inMsg !== "") {
            chatResponses.push({"message":inMsg, "type":"user"})
            this.inputRef.current.value = ""
            chatResponses.push(botResponses[1])
            this.setState({
                messages : chatResponses
            })
        }
    }
    render() {
        return <div className="bot">
            <button className="button" onClick={this.toggleChat.bind(this)}/>
            {/*<div className="popup" style={{display: this.state.displayChat ? "none" : "block"}}>
                <p className="popup-text">Click to chat with me!</p>
    </div>*/}
            <div className="chat-container" style={{display: this.state.displayChat ? "block" : "none"}}>
                <div className="chat-header">
                    <div className="header-text">Conversation with Chatbot</div>
                </div>
                <div className="chat-body">
                    <Chat messages={this.state.messages}/>
                </div>
                <div className="chat-input">
                    <input className="input" type="text" placeholder="Write your message here" ref={this.inputRef}/>
                    <button className="msg-button" onClick={this.handleInput.bind(this)}/>
                </div>
            </div>
        </div>
    }
}

export default Chatbot;