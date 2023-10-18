// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "react-toastify/dist/ReactToastify.css";
// import { Provider } from 'react-redux';
// import store from '../src/redux/store'; // Подставьте путь к вашему файлу с конфигурацией Redux Store
// // import * as firebase from 'firebase/app';
// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// // const firebaseConfig = {
// //     apiKey: "AIzaSyBLdDhl_YCtWd1TEwfq_g21qrWriKyihRM",
// //     authDomain: "spa-app-movies00.firebaseapp.com",
// //     projectId: "spa-app-movies00",
// //     storageBucket: "spa-app-movies00.appspot.com",
// //     messagingSenderId: "254854655334",
// //     appId: "1:254854655334:web:860240fc4ecf11df3b6ca7",
// // };
// // ReactDOM.render(
// //   <Provider store={store}>
// //     <App />
// //   </Provider>,
// //   document.getElementById('root')
// ReactDOM.render(
//   <App />, // Replace 'App' with your root component
//   document.getElementById('root')
// );


// // ReactDOM.render(
// //     <Provider store={store}> {/* Wrap your App component with Provider */}
// //       <App />
// //     </Provider>,
// //     container
// //   );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://create-react-app.dev/docs/measuring-performance/
// reportWebVitals();

// import React from "react";
// import ReactDOM from 'react-dom'; // Updated import statement
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "react-toastify/dist/ReactToastify.css";
// import { Provider } from 'react-redux';
// import store from './redux/store'; // Update the import path to your Redux store configuration

// // const container = document.getElementById('root');

// // // You can use ReactDOM.createRoot if your React version supports concurrent mode
// // // const root = ReactDOM.createRoot(container);

// // ReactDOM.render(
// //   <Provider store={store}>
// //     <App />
// //   </Provider>,
// //   container
// // );
// // Instead of ReactDOM.render, use createRoot
// const root = ReactDOM.createRoot(container);
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://create-react-app.dev/docs/measuring-performance/
// reportWebVitals();

// import React from "react";
// import ReactDOM from 'react-dom/client';
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "react-toastify/dist/ReactToastify.css";
// import { Provider } from 'react-redux';
// import store from '../src/redux/store'; // Replace with the correct path to your Redux store configuration

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// reportWebVitals();

// // index.js (или другой файл, где вы рендерите ваше приложение)
// import React from "react";
// import ReactDOM from 'react-dom';
// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import "react-toastify/dist/ReactToastify.css";
// // import { Provider } from 'react-redux';
// // import store from '../src/redux/store'; // Replace with the correct path to your Redux store configuration
// // import React from 'react';
// // import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import Main from './pages/Main'; // Импортируйте ваш компонент Main
// import store from './redux/store';
// import { createRoot } from 'react-dom';
// // ReactDOM.render(
// //   <Provider store={store}>
// //     <Main />
// //   </Provider>,
// //   document.getElementById('root')
// // );


// // ReactDOM.render(
// //   <Provider store={store}>
// //     <Main />
// //   </Provider>,
// //   document.getElementById('root')
// // );

// // const root = createRoot(document.getElementById('root'));
// // root.render(<App />);


// // ReactDOM.render(
// //   <Provider store={store}>
// //     <App />
// //   </Provider>,
// //   document.getElementById('root')
// // );


// // createRoot(document.getElementById('root')).render(<App />);
// const root = createRoot(document.getElementById('root'));
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
// reportWebVitals();

//-------------------------
// index.js (или другой файл, где вы рендерите ваше приложение)
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import Main from './pages/Main';
import store from './redux/store';
import { createRoot } from 'react-dom/client';  // Импортируем createRoot из 'react-dom/client'
import AuthContextProvider from './context/AuthContext'; // Импорт AuthContextProvider
import App from "./App";
import reportWebVitals from './reportWebVitals';

// const root = createRoot(document.getElementById('root'));  // Используем createRoot
// // root.render(
// //   <Provider store={store}>
// //     <Main />
// //   </Provider>,
// // );

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();

