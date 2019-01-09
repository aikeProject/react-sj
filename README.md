#### 事件系统
*   合成事件与原生事件的绑定方式
```
react里的写法
属性名称采用驼峰式（如：onClick，onKeyDown），而不是全小写字母。
属性值接受一个函数，而不是字符串。
<button onClick={this.handleClick}></button>

原生写法 dom上注册事件的方式

1. <button  onclick="handle()"></button>
  
2. <a href="#" id="my-link">
    Click me.
    </a>
  
    <script type="text/javascript">
        document.querySelector('#my-link').addEventListener('click', (e) => {
            e.preventDefault();
            console.info("You clicked me.");
        });
    </script>  


    // 阻止冒泡
    e.stopPropagation();
    // 阻止默认行为
    e.preventDefault()
```

*    [合成事件的实现机制](./src/demo1.js)
```
react主要做的是事件委派和自动绑定

1. 把所有事件绑定到结构的外层（document），使用一个统一的事件监听器，这个事件监 听器上维持了一个映射来保存所有组件内部的事件监听和处理函数

2. 自动绑定
// 1. bind方法绑定
// 2. 双冒号语法
// 3. 构造器声明
// 4. 箭头函数 自动绑定当前的this
```

*   [不要将合成事件与原生事件混用](./src/demo2.js)
```
React 合成事件系统的委托机制，在合成事件内部仅仅对外层的容器进行了绑定，并且依赖事件的冒泡机制完成了委派。
也就是说，事件 并没有直接绑定到元素上，所以在这里使用 e.stopPropagation() 并没有用阻止 React 事件冒泡的行为只能用于 React 合成事件系统 中，
且没办法阻止原生事件的冒原生事件中的阻止冒泡行为，却可以阻止 React 合成 事件的传播
```

* 对比React合成事件与JavaScript原生事件
```
1. 事件传播与阻止事件传播 
  浏览器原生 DOM 事件的传播可以分为 3 个阶段：事件捕获阶段、目标对象本身的事件处理 程序调用以及事件冒
 2. 事件类型 
   React 合成事件的事件类型是 JavaScript 原生事件类型的一个子集。 
```

### react-router
-   两种路由形式 `BrowserRouter 和 HashRouter` [BrowserRouter 和 HashRouter](./public/pushState.html)
```
BrowserRouter
<BrowserRouter> 使用 HTML5 提供的 history API (pushState, replaceState 和 popstate 事件) 来保持 UI 和 URL 的同步
可以在不刷新页面的前提下动态改变浏览器地址栏中的URL地址，动态修改页面上所显示资源。
1. history.pushState(state, title, url); 添加一条历史记录，不刷新页面
2. history.replaceState(state, title, url); 替换当前的历史记录，不刷新页面
3. popstate 事件：历史记录发生改变时触发，调用history.pushState()或者history.replaceState()不会触发popstate事件

HashRouter
<HashRouter> 使用 URL 的 hash 部分（即 window.location.hash）来保持 UI 和 URL 的同步
哈希历史记录不支持location.key和location.state (所以通过state传参不可以)
```
-  [几种跳转方式](./src/rouer1.js)
```js
window.location.href = `#/${url}/users`;

<Link to={`${url}/home`}>HomeStr</Link>

<Link to={{pathname: `${url}/home`,search: '?HomeObj=HomeObj',hash: '#HomeObj',state: HomeObj: 'HomeObj'}}}>HomeObj</Link>

<NavLink isActive={(match, location) => {
        console.log(match, location);
    }} to={`${url}/about/1`} activeClassName='active' activeStyle={{color: 'yellow'}}>AboutStr</NavLink>

<NavLink to={{pathname: `${url}/about/2`,
              search: '?AboutObj=AboutObj',
              hash: '#AboutObj',
              state: {AboutObj: 'AboutObj'}
                }} activeClassName='active' activeStyle={{color: 'yellow'}}>AboutObj</NavLink>

<a href={`${url}/users`}>usersa</a>

<a href={`#${url}/users/1`}>users#</a>
```
-  [路由传参的几种方式](./src/router2.js)
```js
// 通过params传递参数
<li><Link to={`${url}/home/${999}`}>params Link处传参</Link></li>
<li onClick={() => {
    history.push(`${url}/home/${123}`);
}}>params JS方式
</li>

// 自定义传参数
<li><Link to={{pathname: `${url}/about`, query: {day: 'Friday'}}}>query Link处传参</Link></li>
<li onClick={() => {
history.push({pathname: `${url}/about`, query: {day: 'Friday'}})
}}>query JS方式
</li>
     
// 通过state传递参数
// HashRouter 刷新后数据丢失
// BrowserRouter 刷新数据不会丢失
<li><Link to={{pathname: `${url}/users`, state: {day: 'Friday'}}}>通过state Link处传参</Link></li>
<li onClick={() => {
history.push({pathname: `${url}/about`, state: {day: 'Friday'}})
}}>通过state Js</li>

```
[路由传参的几种方式](https://blog.csdn.net/xiasohuai/article/details/81742885)
[React-router V4 中BrowserRouter和HashRouter的区别](http://zhangdajia.com/2018/11/30/React-router-v4%E4%B8%ADBrowserRouter%E5%92%8CHashRouter%E7%9A%84%E5%8C%BA%E5%88%AB/)

- [路由配置](./src/router3.js)
```
component 当你使用 component（而不是 render 或 children）时，Router 将根据指定的组件，使用 React.createElement 创建一个新的 React 元素
render 使用 render 可以方便地进行内联渲染和包装，而无需进行上文解释的不必要的组件重装
children 不论 path 是否匹配位置,都渲染一些内容

exact  如果为 true，则只有在 path 完全匹配 location.pathname 时才匹配
strict 如果为 true，则具有尾部斜杠的 path 仅与具有尾部斜杠的 location.pathname 匹配

Switch> 只会渲染一个路由
```