/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import moment from 'moment';
import '../../main/main.less';
import XiaoFeiZhiShuItem from "./item";


export default class XiaoFeiZhiShu extends React.Component {

    constructor(props) {
        super(props);
        moment.locale('zh-cn');

    }

    componentWillUnmount() {

    }


    componentDidMount() {

    }


    render() {
        return (<div className="chartpanel">
                <div className="header">{this.props.title}</div>
                <div className="content xfzs">
                    <XiaoFeiZhiShuItem uuid="xfzs_001" />
                    <XiaoFeiZhiShuItem uuid="xfzs_002" />
                    <XiaoFeiZhiShuItem uuid="xfzs_003" />
                    <XiaoFeiZhiShuItem uuid="xfzs_004" />

                </div>
            </div>
        );
    }
}