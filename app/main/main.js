/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import moment from 'moment';
import ChartPanel from './chartpanel';
import JiuYeLv from '../minsheng/jiuyelv';
import NMShouRu from '../minsheng/nmshouru';
import ZNQiYe from '../minsheng/znqiye';
import SexFenBu from '../minsheng/sexfb';
import HangYeFenBu from '../minsheng/hyfenbu';
import GDP from '../jingji/gdp';
import ShouRuZengSu from '../jingji/srzengsu';
import XiaoFeiZhiShu from '../jingji/xfzhishu';

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
                    <div className="row-item"><ZNQiYe uuid="u1" title="镇内企业统计分析"/></div>
                    <div className="row-item"><SexFenBu uuid="u2" title="居民年龄及性别分布"/></div>
                    <div className="row-item"><HangYeFenBu uuid="u3" title="从事行业分布"/></div>
                    <div className="row-item"><JiuYeLv uuid="u4" title="居民就业率"/></div>
                    <div className="row-item"><NMShouRu uuid="u5" title="民生满意度"/></div>
                </div>
                <div className="col">
                    <div className="row-title">
                        <h2> 经济 </h2>
                    </div>
                    <div className="row-item"><GDP uuid="u6" title="赵全营总GDP、人均GDP"/></div>
                    <div className="row-item"><ShouRuZengSu uuid="u7" title="收入增速"/></div>
                    <div className="row-item"><XiaoFeiZhiShu uuid="u8" title="消费指数"/></div>
                    <div className="row-item"><ChartPanel uuid="u9" title="产业区块占比"/></div>
                </div>
                <div className="col">
                    <div className="row-title">
                        <h2> 概述 </h2>
                    </div>
                    <div className="row-item" style={{flexGrow: 2}}><ChartPanel uuid="u10"  title="顺义区赵全营镇地图"/></div>
                    <div className="row-title">
                        <h2> 人口 </h2>
                    </div>
                    <div className="row-item"><ChartPanel uuid="u11" title="人口统计"/></div>
                    <div className="row-item"><ChartPanel uuid="u12" title="固定人员"/></div>

                </div>
                <div className="col">
                    <div className="row-title">
                        <h2> 环境 </h2>
                    </div>
                    <div className="row-item"><ChartPanel uuid="u13" title="空气质量"/></div>
                    <div className="row-item"><ChartPanel uuid="u14" title="噪音"/></div>
                    <div className="row-item"><ChartPanel uuid="u15" title="水质指数及走势"/></div>
                    <div className="row-item"><ChartPanel uuid="u16" title="企业违规生产"/></div>
                </div>
            </div>
        );
    }
}