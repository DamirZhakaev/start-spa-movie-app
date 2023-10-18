// // store.js
// import { createStore } from 'redux';
// import { mainReducer } from './reducers';

// const store = createStore(mainReducer);
// // const store = createStore(rootReducer);
// export default store;

// store.js
import { createStore } from 'redux';
import mainReducer from '../redux/reducers/mainReducer';

const store = createStore(mainReducer);

export default store;
