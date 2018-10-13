//Подключаем нужные нам библиотеки
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import {BrowserRouter} from 'react-router-dom'

import rootReducer from './reducers/rootReducer'

import {Provider} from 'react-redux'

import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension' // для дебага редакса

import thunk from 'redux-thunk' // асинхронные диспатчи

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))) // создаем store для нашего приложение и передаем в него rootReducer

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root')
);

module.hot.accept();
