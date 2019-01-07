#### 事件系统
*   合成事件与原生事件的绑定方式
```js
// react里的写法
// 属性名称采用驼峰式（如：onClick，onKeyDown），而不是全小写字母。
// 属性值接受一个函数，而不是字符串。
<button onClick={this.handleClick}></button>

// 原生写法 dom上注册事件的方式
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

    阻止冒泡
    e.stopPropagation();
    阻止默认行为
    e.preventDefault()
```

*    合成事件的实现机制
```js
react主要做的是事件委派和自动绑定

1. 把所有事件绑定到结构的外层（document），使用一个统一的事件监听器，这个事件监 听器上维持了一个映射来保存所有组件内部的事件监听和处理函数

2. 自动绑定
// 1. bind方法绑定
// 2. 双冒号语法
// 3. 构造器声明
// 4. 箭头函数 自动绑定当前的this
```

*   不要将合成事件与原生事件混用
```js
//React 合成事件系统的委托机制，在合成事件内部仅仅对外层的容器进行了绑定，并且依赖事件的冒泡机制完成了委派。也就是说，事件 并没有直接绑定到元素上，所以在这里使用 e.stopPropagation() 并没有用阻止 React 事件冒泡的行为只能用于 React 合成事件系统 中，且没办法阻止原生事件的冒原生事件中的阻止冒泡行为，却可以阻止 React 合成 事件的传播
```

* 对比React合成事件与JavaScript原生事件
```js
1. 事件传播与阻止事件传播 
    浏览器原生 DOM 事件的传播可以分为 3 个阶段：事件捕获阶段、目标对象本身的事件处理 程序调用以及事件冒

    React 的合成事件则并没有实现事件捕获，仅仅支持了事件冒泡机制
2. 事件类型 
    React 合成事件的事件类型是 JavaScript 原生事件类型的一个子集。 
```

### react-router