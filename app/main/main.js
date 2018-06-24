/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import moment from 'moment';
import {Layout, Divider, Menu, message, Avatar} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

import ChartPanel from './chartpanel';

import './main.less';

export class Main extends React.Component {

    constructor(props) {
        super(props);
        moment.locale('zh-cn');

    }

    componentWillUnmount() {

    }


    componentDidMount() {
    }

    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (<div className="main">
                <div className="col">
                    <div className="row-title">
                        <h2> 民生 </h2>
                    </div>
                    <div className="row-item">
                        <ChartPanel />
                    </div>
                    <div className="row-item">2</div>
                    <div className="row-item">3</div>
                    <div className="row-item">4</div>
                    <div className="row-item">5</div>
                </div>
                <div className="col">
                    <div className="row-title">
                        <h2> 民生 </h2>
                    </div>

                </div>
                <div className="col">
                    <div className="row-title">
                        <h2> 民生 </h2>
                    </div>

                </div>
                <div className="col">
                    <div className="row-title">
                        <h2> 民生 </h2>
                    </div>

                </div>
            </div>
        );
    }
}