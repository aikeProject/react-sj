import React, {Component} from 'react';

class Demo1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="demo1">
                <button onClick={this.handleClick1.bind(this, 'bind')}>bind方法</button>
                <br/>
                <button onClick={::this.handleClick2}>::双冒号语法</button>
                <br/>
                <button onClick={this.handleClick3}>构造器内声明</button>
                <br/>
                <button onClick={this.handleClick4}>箭头函数</button>
            </div>
        );
    }
}

export default Demo1;
