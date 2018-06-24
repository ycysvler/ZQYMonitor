/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import moment from 'moment';

import {Layout, Icon} from 'antd';

const {Header, Footer, Sider, Content} = Layout;


import './wellcome.less';

export class WellCome extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(next){
        let self = this;

    }


    //不用的是时候将其解绑
    componentWillUnmount() {
    }

    render() {

        return (<Layout className='wellcome'>
                <div>
                    六盘水市公安局钟山分局警务云系统


                </div>



            </Layout>
        );
    }
}