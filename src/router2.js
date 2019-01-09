import React from 'react';

import {Route, Link, } from "react-router-dom";
import {createHashHistory} from "history";

const createHistory = createHashHistory();

const Index = ({match}) => <h2>Home<br/>{JSON.stringify(match)}</h2>;
const About = ({location}) => <h2>About{JSON.stringify(location)}</h2>;
const Users = ({location}) => <h2>Users{JSON.stringify(location)}</h2>;
const History = ({location}) => <h2>History{JSON.stringify(location)}</h2>;

const Router1 = ({match, history}) => {
    let url = match.url;
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={`${url}/home/${999}`}>params Link处传参</Link></li>
                    <li onClick={() => {
                        history.push(`${url}/home/${123}`);
                    }}>params JS方式
                        <hr/>
                    </li>
                    {/* 刷新后数据丢失 */}
                    <li><Link to={{pathname: `${url}/about`, query: {day: 'Friday'}}}>query Link处传参</Link></li>
                    <li onClick={() => {
                        history.push({pathname: `${url}/about`, query: {day: 'Friday'}})
                    }}>query JS方式
                    </li>
                    <hr/>
                    <li><Link to={{pathname: `${url}/users`, state: {day: 'Frid  ay'}}}>通过state Link处传参</Link></li>
                    <li onClick={() => {
                        // HashRouter 刷新后数据丢失
                        // BrowserRouter 刷新数据不会丢失
                        history.push({pathname: `${url}/about`, state: {day: 'Friday'}})
                    }}>通过state Js</li>
                    <hr/>
                    {/*<li><Link to={{pathname: `${url}/users`, state: {day: 'createHistory'}}}>通过history Link处传参</Link></li>*/}
                    {/*<li onClick={() => {*/}
                        {/*createHistory.push({pathname: `${url}/history`, state: {day: 'createHistory'}})*/}
                    {/*}}>通过history Js</li>*/}
                    <hr/>
                </ul>
            </nav>

            <Route path={`${url}/home/:id`} component={Index}/>
            <Route path={`${url}/about`} component={About}/>
            <Route path={`${url}/users`} component={Users}/>
            <Route path={`${url}/history`} component={History}/>
        </div>
    );
};

export default Router1;
