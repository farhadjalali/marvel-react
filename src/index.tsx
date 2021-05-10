import React from 'react';
import {render} from 'react-dom';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from './components/Home/Home';
import Superhero from './components/Superhero/Superhero';
import reportWebVitals from './utils/reportWebVitals';
import App from './components/App/App';
import env from 'dotenv';
import {configureStore} from './store';
import "./style/index.scss";

env.config();
const store = configureStore();

render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/superhero/:id" component={Superhero}/>
                    </Switch>
                </App>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
