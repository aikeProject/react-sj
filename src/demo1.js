import React, {Component} from 'react';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.handleClick3 = this.handleClick3.bind(this);
    }

    handleClick1(arg) {
        console.log(arg);
    }

    handleClick2(e) {
        console.log(e);
        console.log(this)
    }

    handleClick3(e) {
        console.log(e);
        console.log(this)
    }

    handleClick4 = (e) => {
        console.log(e);
        console.log(this)
    };

    render() {
        return (
            <div className="demo1">
                <button onClick={this.handleClick1.bind(this, 'bind')}>bind方法</button>
                <br/>
                {/*<button onClick={::this.handleClick2}>::双冒号语法</button>*/}
                <br/>
                <button onClick={this.handleClick3}>构造器内声明</button>
                <br/>
                <button onClick={this.handleClick4}>箭头函数</button>
            </div>
        );
    }
}

export default Demo1;
