import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div>事件系统</div>
                    <ul>
                        <li>
                            <NavLink to='/demo1'>合成事件的绑定方式</NavLink>
                        </li>
                        <li>
                            <NavLink to='/demo2'>合成事件与原生事件</NavLink>
                        </li>
                        <li>
                            <a href="pushState.html">react-router两种路由形式</a>
                        </li>
                        <li>
                            <NavLink to='/router1'>几种跳转方式</NavLink>
                        </li>
                        <li>
                            <NavLink to='/router2'>路由传参的几种方式</NavLink>
                        </li>
                        <li>
                            <NavLink to='/router3'>路由配置</NavLink>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}

export default App;
