import React, { useState, useRef, useEffect } from "react";
import "./ChatButton.css"; // Стили для кнопки
import "./ChatBot.css"; // Стили для чатбота
import axios from "axios";

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    const newMessage = {
      text: input,
      user: "user",
    };

    setMessages([...messages, newMessage]);
    setInput("");
  };

  // При изменении сообщений прокручиваем контейнер к последнему сообщению
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`chatbot ${isChatOpen ? "open" : ""}`}>
      <div className="chatbot-content">
        <div className="chatbot-header">
          <div className="chatbot-title">ChatBot</div>
          <div className="chatbot-close" onClick={toggleChat}>
            &#x2715;
          </div>
        </div>
        <div className="chatbot-messages" ref={messagesContainerRef}>
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
