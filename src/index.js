import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import App from './App';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Router1 from './router1';
import * as serviceWorker from './serviceWorker';

class Root extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/app" component={App}/>
                    <Route path="/demo1" component={Demo1}/>
                    <Route path="/demo2" component={Demo2}/>
                    <Route path="/router1" component={Router1}/>
                    <Route render={() => <Redirect to="/app" />} />
                </Switch>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
