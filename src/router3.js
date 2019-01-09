import React from 'react';

import {Route, Link} from "react-router-dom";

const Index = ({}) => <h2>component render children</h2>;
const About = ({}) => <h2>About</h2>;
const Users = ({}) => <h2>Users</h2>;

const Router1 = ({match, history}) => {
    let url = match.url;
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to={`${url}/home`}>component render children</Link></li>
                    <li><Link to={`${url}/users`}>exact strict</Link></li>
                </ul>
            </nav>
            {/*
            component 当你使用 component（而不是 render 或 children）时，Router 将根据指定的组件，
            使用 React.createElement 创建一个新的 React 元素
            render 使用 render 可以方便地进行内联渲染和包装，而无需进行上文解释的不必要的组件重装
            children 不论 path 是否匹配位置,都渲染一些内容
            */}
            {/*<Route path={`${url}/home`} component={Index}/>*/}
            {/*<Route path={`${url}/home`} render={Index}/>*/}
            {/*<Route path={`${url}/home`} children={Index}/>*/}

            <Route exact path={`${url}/`} component={About}/>
            <Route path={`${url}/users`} component={Users}/>
        </div>
    );
};

export default Router1;
