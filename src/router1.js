import React, {Component} from 'react';

import {Route, Link, NavLink, Prompt} from "react-router-dom";
const Index = ({}) => <h2>Home</h2>;
const About = ({location}) => <h2>About{JSON.stringify(location)}</h2>;
const Users = ({}) => <h2>Users</h2>;

const Router1 = ({match}) => {
    let url = match.url;
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to={`${url}/home`}>HomeStr</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: `${url}/home`,
                            search: '?HomeObj=HomeObj',
                            hash: '#HomeObj',
                            state: {
                                HomeObj: 'HomeObj'
                            }
                        }}>HomeObj</Link>
                    </li>
                    <li>
                        <NavLink isActive={(match, location) => {
                            console.log(match, location);
                        }} to={`${url}/about/1`} activeClassName='active' activeStyle={{color: 'yellow'}}>AboutStr</NavLink>
                    </li>
                    <li>
                        <NavLink to={{
                            pathname: `${url}/about/2`,
                            search: '?AboutObj=AboutObj',
                            hash: '#AboutObj',
                            state: {
                                AboutObj: 'AboutObj'
                            }
                        }} activeClassName='active' activeStyle={{color: 'yellow'}}>AboutObj</NavLink>
                    </li>
                    <li onClick={() => {
                        // HashRouter 浏览器不会刷新
                        window.location.href = `#${url}/users`;

                        // BrowserRouter 浏览器会刷新
                        // window.location.href = `${url}/users`;
                    }}>users</li>
                    <a href={`${url}/users`}>usersa</a>
                    <br/>
                    <a href={`#${url}/users/1`}>users#</a>
                </ul>
            </nav>

            <Route path={`${url}/home`} component={Index} />
            <Route path={`${url}/about/1`} component={About} />
            <Route path={`${url}/about/2`} component={About} />
            <Route path={`${url}/users`} component={Users} />
            <Route path={`${url}/users/1`} component={Users} />
        </div>
    );
};

export default Router1;
