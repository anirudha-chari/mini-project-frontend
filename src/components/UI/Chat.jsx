import React from "react";

class Chat extends React.Component {
    render() {
        return <div>
            {this.props.messages.map(msg => {
                return <div>
                    {msg}
                </div>
            })}
        </div>
    }
}

export default Chat;