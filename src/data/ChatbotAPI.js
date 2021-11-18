const ChatbotAPI = {
    chatbotData : [{
        "question": "What is our return policy?",
        "answer": "We accept returns on unopened items within 7 days from the date of purchase."
    },
    {
        "question": "How many days does it take to receive a order?",
        "answer": "The order will be delivered to your shipping address within 3-4 workings days."
    },
    {
        "question": "What happens if I don't provide my shipping address at the time of checkout?",
        "answer": "In case you have not provided your address at the time of checkout, our shipping team will get in touch with you shortly to collect the required details."
    },
    {
        "question": "Are there any membership plans available?",
        "answer": "Purchasing our membership will enable you to enjoy 10% flat discount on all orders."
    },
    {
        "question": "Talk to customer care executive",
        "answer": "Contact us on 1800-987-6543 or write to us at helpdesk@pharmacy.com"
    },
    {
        "question": "Provide customer feedback",
        "answer": "Feel free to write to us at feedback@pharmacy.com"
    }],
    getSuggestions : function() {
        let suggestions = []
        for(let suggestion of this.chatbotData) {
            suggestions.push(suggestion["question"])
        }
        return suggestions
    },
    getBotResponse : function(query) {
        for(let suggestion of this.chatbotData) {
            if(suggestion["question"] === query) {
                return suggestion["answer"]
            }
        }
        return "Sorry, we could not process your request due to insufficient data."
    }
}

export default ChatbotAPI;