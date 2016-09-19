import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import App from './containers/app'


import { Provider } from 'react-redux'

import Index from './containers/index';
import Login from './containers/login';
import Logout from './containers/logout';

import configureStore from './store/configureStore'


const store = configureStore();


// 将匹配的路由渲染到 DOM 中
ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Index}/>
                <Route path="index" component={Index} />
                <Route path="login" component={Login} />
                <Route path="logout" component={Logout} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));
