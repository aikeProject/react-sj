import React, {Component} from 'react';

class Demo1 extends Component {
    constructor(props) {
        super(props);
    }

    clickHandler(e) {
        console.log('click callback', e);
        for (let i in e) {
            console.log(e[i]);
        }
    }

    render() {
        return (
            <div className="demo3">
                <div className="box" onClick={this.clickHandler.bind(this)}>文本内容</div>
                <code ref='code'>

                </code>
            </div>
        );
    }
}

export default Demo1;
