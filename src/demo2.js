import React, {Component} from 'react';
import {Route, Switch, Redirect, NavLink} from 'react-router-dom';

class Qr1 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickQr = this.handleClickQr.bind(this);
        this.state = {
            active: false,
        };
    }

    commclick = () => {
        this.setState({active: false,});
    };

    componentDidMount() {
        document.body.addEventListener('click', this.commclick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.commclick);
    }

    handleClick() {
        this.setState({active: !this.state.active,});
    }

    handleClickQr(e) {
        //React 合成事件系统的委托机制，在合成事 件内部仅仅对外层的容器进行了绑定，并且依赖事件的冒泡机制完成了委派。
        // 也就是说，事件 并没有直接绑定到 div.qr 元素上，所以在这里使用 e.stopPropagation() 并没有用
        // 阻止 React 事件冒泡的行为只能用于 React 合成事件系统 中，且没办法阻止原生事件的冒
        // 原生事件中的阻止冒泡行为，却可以阻止 React 合成 事件的传播
        e.stopPropagation();
        // e.preventDefault()
    }

    render() {
        return (
            <>
                <button className="qr" onClick={this.handleClick}>合成事件原生事件混用</button>
                <div className="code code1" style={{display: this.state.active ? 'block' : 'none',}}
                     onClick={this.handleClickQr}>
                    <div className='code-img'></div>
                </div>
            </>
        )
    }
}

class Qr2 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            active: false,
        };
    }

    commclick = () => {
        this.setState({active: false,});
    };

    stopPropagation = (e) => {
        e.stopPropagation();
    };

    componentDidMount() {
        document.body.addEventListener('click', this.commclick);

        document.querySelector('.code2').addEventListener('click', this.stopPropagation);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.commclick);
        document.querySelector('.code2').removeEventListener('click', this.stopPropagation);
    }

    handleClick() {
        this.setState({active: !this.state.active,});
    }

    render() {
        return (
            <>
                <button className="qr" onClick={this.handleClick}>不要将合成事件与原生事件混用</button>
                <div className="code code2" style={{display: this.state.active ? 'block' : 'none',}}>
                    <div className='code-img'></div>
                </div>
            </>
        )
    }
}

class Qr3 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            active: false,
        };
    }

    commclick = (e) => {
        console.log(e.target);
        if (e.target && e.target.matches('div.code-img')) {
            return;
        }
        this.setState({active: false,});
    };

    componentDidMount() {
        document.body.addEventListener('click', this.commclick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.commclick);
    }

    handleClick() {
        this.setState({active: !this.state.active,});
    }

    render() {
        return (
            <>
                <button className="qr" onClick={this.handleClick}>通过 e.target 判断来避免</button>
                <div className="code code3" style={{display: this.state.active ? 'block' : 'none',}}>
                    <div className='code-img'></div>
                </div>
            </>
        )
    }
}

class QrCode extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="demo2">
                <div className="qr-wrapper">
                    <button><NavLink to={`${this.props.match.url}/1`}>示例1</NavLink></button>
                    <button><NavLink to={`${this.props.match.url}/2`}>示例2</NavLink></button>
                    <button><NavLink to={`${this.props.match.url}/3`}>示例3</NavLink></button>
                    <div style={{marginTop: '20px'}}>
                        <Switch>
                            <Route path={`${this.props.match.url}/1`} component={Qr1}/>
                            <Route path={`${this.props.match.url}/2`} component={Qr2}/>
                            <Route path={`${this.props.match.url}/3`} component={Qr3}/>
                            <Route render={() => <Redirect to={`${this.props.match.url}/1`}/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default QrCode;
