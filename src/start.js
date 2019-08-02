import React from 'react';
import ReactDOM from 'react-dom';
import { init as initSocket } from './react_utils/socket';

// PAGES
import App from './pages/app';
import AdminPage from './pages/admin';
import LoginPage from './pages/login';

// REDUX SHIT
import reducer from './react_utils/redux/reducers';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
const store = createStore(reducer, composeWithDevTools(applyMiddleware(reduxPromise)));


// initSocket(store);

let elem;
if (location.pathname === '/admin') {
    elem = <AdminPage />; 
} else if (location.pathname === '/login'){
    elem = <LoginPage/>;
} else {
    initSocket(store);
    elem = <Provider store={store}>
        <App />
    </Provider>;
}

ReactDOM.render(elem, document.querySelector('main'));
