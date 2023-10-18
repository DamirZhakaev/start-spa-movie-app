// import React from "react";
// import ReactDOM from 'react-dom';
// import { ToastContainer } from "react-toastify";
// import AuthContextProvider from "./context/AuthContext";
// import {Route, Routes, useLocation} from 'react-router-dom';
// import AppRouter from "./router/AppRouter";
// // import ChatBot from './ChatBot';
// // import Chatbot from './chatbot/ChatBot'; // Use correct relative path
// import { Provider } from 'react-redux'; // Import Provider
// import store from './redux/store'; // Import your Redux store
// import Main from './pages/Main';
// import Footer from "./pages/Footer";

// // const App = () => {
// //   return (
// //     <div>
// //       <AuthContextProvider>
// //           <AppRouter />
// //         <ToastContainer />
// //       </AuthContextProvider>
// //       {/* Other components */}
// //     </div>
// //   );
// // };

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//       <App />
//     </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
// export default App;

import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./router/AppRouter";
import { Provider } from 'react-redux';
import store from './redux/store';
import { createRoot } from 'react-dom/client';
import Footer from "./pages/Footer";

const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer />
      </AuthContextProvider>
      {/* Other components */}
    </div>
  );
};

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
export default App;