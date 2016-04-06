/**
 * Created by henry on 16/3/30.
 */
import React from 'react';
import ReactDom from 'react-dom';
import Nav from './nav';
import { Row, Col } from 'antd';
import Me from './me'
import Assets from './assets';
import Business from './business';
import Counselor from './counselor';
//import css
import '../css/nav.css'


const Footer = React.createClass({
    getInitialState() {
        return {

            route: window.location.hash.substr(1)
        }
    },

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            })
        })
    },
    render() {
        let Child
        switch (this.state.route) {
            case '/me': Child = Me; break;
            case '/counselor': Child = Counselor; break;
            case '/assets': Child = Assets; break;
            default:      Child = Business;
        }
        return (
            <div>
                <Child/>
                <div className="navStyle">
                    <Row >
                        <Col className="text-center" span="6">
                            <Nav
                                className={window.location.hash == "#/business"||window.location.hash =="" ? "active" : "disActive"}
                                href="#/business" icon="&#xe603;" name="经营">
                            </Nav>
                        </Col>
                        <Col className="text-center" span="6">
                            <Nav
                                className={window.location.hash == "#/assets" ? "active" :"disActive"}
                                href="#/assets" icon="&#xe602;" name="资产">
                            </Nav>
                        </Col>
                        <Col  className="text-center" span="6">
                            <Nav
                                className={window.location.hash == "#/counselor" ? "active" :"disActive"}
                                href="#/counselor" icon="&#xe609;" name="顾问">
                            </Nav>
                        </Col>
                        <Col className="text-center" span="6">
                            <Nav
                                className={window.location.hash == "#/me" ? "active" :"disActive"}
                                href="#/me" icon="&#xe606;" name="我">
                            </Nav>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
});
export default Footer;