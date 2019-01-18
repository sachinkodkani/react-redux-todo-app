import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import TodoApp from './TodoApp';
import store from './redux/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store} >
        <TodoApp />
    </Provider>,
    rootElement);

