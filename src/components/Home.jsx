import axios from 'axios'
import React from 'react'
import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from '../chatbot/ChatBot'; // Укажите правильный путь
import { useEffect } from 'react'

const Home = () => {
const apiFunc = ()=>{
    axios.get("https://api.themoviedb.org/5/movie/550?api_key=e9dfe057189ab5836fd689e66179f5e9").then(res=> console.log(res))
}



/* useEffect(() => {
  apiFunc();
}, []) */

apiFunc();


  return (
    <div>
      home
    </div>
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
export default Home