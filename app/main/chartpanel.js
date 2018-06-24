/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import moment from 'moment';
import {Layout, Divider, Menu, message, Avatar} from 'antd';

const {Header, Footer, Sider, Content} = Layout;

import './main.less';

export default class ChartPanel extends React.Component {

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
        return (<div className="chartpanel">
                <div className="header">镇内企业统计分析</div>
                <div className="content">?????</div>
            </div>
        );
    }
}