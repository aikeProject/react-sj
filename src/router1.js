import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}


class Router1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={`${match.url}/`}>Home</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/about`}>About</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path={`${match.url}/`} component={Home} />
                    <Route path={`${match.url}/about`} component={About} />
                </div>
            </Router>
        );
    }
}

export default Router1;
