// import React, { useState, useRef, useEffect } from 'react';
// import './ChatButton.css'; // Стили для кнопки
// import './ChatBot.css'; // Стили для чатбота
// import axios from 'axios';
// const cors = require("cors");


// const ChatBot = () => {
//   const [isChatOpen, setIsChatOpen] = useState(false);
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState([]);
//   const messagesContainerRef = useRef(null);

//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (input.trim() === '') return;
  
//     const newMessage = {
//       text: input,
//       user: 'user',
//     };
  
//     // Отправляем данные на сервер PHP
//     fetch('http://server.spa:3306/connect.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ text: input, user: 'user' }),
//     })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log('Сервер ответил:', data);
    
//       // Создаем новое сообщение на основе введенного текста и пользователя
//       const newMessage = {
//         text: input,
//         user: 'user',
//       };
    
//       // Обновляем состояние, чтобы отобразить отправленное сообщение в чате
//       setMessages([...messages, newMessage]);
    
//       // Очищаем поле ввода
//       setInput('');
//     })
//     .catch((error) => {
//       console.error('Ошибка отправки на сервер:', error);
//       // Обрабатываем ошибку, например, выводим сообщение об ошибке
//       // или выполняем другие действия по обработке ошибки
//     });
    
  
//     setInput('');
//   };
  

//   // Добавляем обработчик нажатия клавиши Enter
//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   // При изменении сообщений прокручиваем контейнер к последнему сообщению
//   useEffect(() => {
//     if (messagesContainerRef.current) {
//       messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
//     }
//   }, [messages]);

//   return (
//     <div className={`chatbot ${isChatOpen ? 'open' : ''}`}>
//       <div className="chatbot-content">
//         <div className="chatbot-header">
//           <div className="chatbot-title">ChatBot</div>
//         </div>
//         <div className="chatbot-messages" ref={messagesContainerRef}>
//           {messages.map((message, index) => (
//             <div key={index} className={`message ${message.user}`}>
//               {message.text}
//             </div>
//           ))}
//         </div>
//         <div className="chatbot-input">
//           <input
//             type="text"
//             placeholder="Type a message..."
//             value={input}
//             onChange={handleInputChange}
//             onKeyDown={handleKeyDown} // Добавляем обработчик нажатия клавиши Enter
//           />
//           <button onClick={handleSendMessage}>Send</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;

//----------------------------

import React, { useState, useRef, useEffect } from 'react';
import './ChatButton.css'; // Стили для кнопки
import './ChatBot.css'; // Стили для чатбота
import axios from 'axios';
const cors = require("cors");

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;

    const newMessage = {
      text: input,
      user: 'user',
    };

    // Отправляем данные на сервер
    axios.post('http://localhost:82/server.spa/api_chatbot.php', { text: input, user: 'user' })
  .then((response) => {
    console.log('Сервер ответил:', response.data);
    // Обновляем состояние, чтобы отобразить отправленное сообщение в чате
    setMessages([...messages, newMessage]);
  })
  .catch((error) => {
    console.error('Ошибка отправки на сервер:', error);
  });


    setInput('');
  };

  // Добавляем обработчик нажатия клавиши Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // При изменении сообщений прокручиваем контейнер к последнему сообщению
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={`chatbot ${isChatOpen ? 'open' : ''}`}>
      <div className="chatbot-content">
        <div className="chatbot-header">
          <div className="chatbot-title">ChatBot</div>
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
            onKeyDown={handleKeyDown} // Добавляем обработчик нажатия клавиши Enter
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
