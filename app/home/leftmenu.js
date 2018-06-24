/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

import {Layout, Icon,Tabs,Row, Col,Avatar} from 'antd';
import PoliceNav from '../police/nav/index';
import AlarmNav from '../alarm/nav/index';
import StationNav from '../station/nav/index';


const {Header, Footer, Sider, Content} = Layout;
const TabPane = Tabs.TabPane;

import './index.less';

export class LeftMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    callback=(key)=> {
        document.log('leftmenu > tabChange', key);

        this.props.onTabChange(key);
    }

    render() {

        return (<div className='leftmenu'>

                <div className='menu' >
                    <Tabs defaultActiveKey="alarm" onChange={this.callback}>
                        <TabPane tab="&nbsp;&nbsp;警&nbsp;&nbsp;情&nbsp;&nbsp;" key="alarm"><AlarmNav /></TabPane>
                        <TabPane tab="&nbsp;&nbsp;警&nbsp;&nbsp;员&nbsp;&nbsp;" key="police"><PoliceNav /></TabPane>
                        <TabPane tab="&nbsp;&nbsp;警&nbsp;&nbsp;所&nbsp;&nbsp;" key="station"><StationNav /></TabPane>
                    </Tabs>

                </div>

            </div>
        );
    }
}