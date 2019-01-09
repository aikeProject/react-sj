import React from 'react';

import {Route, Link, Switch} from "react-router-dom";

const Index = ({}) => <h2>component render children</h2>;
const About = ({}) => <h2>About</h2>;
const Users = ({}) => <h2>Users</h2>;

const Router1 = ({match, history}) => {
    let url = match.url;
    return (
        <div>
            <nav>
                <ul>
                    {/*<li><Link to={`${url}/home`}>component render children</Link></li>*/}
                    <hr/>
                    {/*<li><Link to={`${url}/users`}>exact</Link></li>*/}
                    <hr/>
                    {/*<li><Link to={`${url}/about/`}>strict</Link></li>*/}
                    <hr/>
                    <li><Link to={`${url}/about`}>strict</Link></li>
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

            {/*
             exact  如果为 true，则只有在 path 完全匹配 location.pathname 时才匹配
            */}
            {/*<Route exact path={`${url}/`} component={About}/>*/}
            {/*<Route path={`${url}/users`} component={Users}/>*/}

            {/*
            strict 如果为 true，则具有尾部斜杠的 path 仅与具有尾部斜杠的 location.pathname 匹配
            <li><Link to={`${url}/about`}>strict</Link></li> 这样子不匹配
            */}
            {/*<Route strict={true} path={`${url}/about/`} component={About}/>*/}

            {/*
<               Switch> 只会渲染一个路由
            */}
            {/*<Route path={`${url}/about`} component={Users}/>*/}
            {/*<Route path={`${url}/:id`} component={About}/>*/}
            {/*<Route path={`${url}/`} component={Index}/>*/}

            <Switch>
                <Route path={`${url}/about`} component={Users}/>
                <Route path={`${url}/about/:id`} component={About}/>
                <Route path={`${url}/about`} component={Index}/>
            </Switch>

        </div>
    );
};

export default Router1;
