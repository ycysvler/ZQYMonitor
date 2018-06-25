/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import moment from 'moment';
import '../../main/main.less';

export default class SexFenBu extends React.Component {

    constructor(props) {
        super(props);
        moment.locale('zh-cn');

    }

    componentWillUnmount() {

    }


    componentDidMount() {
        this.showChart();
    }

    showChart=()=>{

        var myChart = echarts.init(document.getElementById(this.props.uuid));


        var option = {
            grid:{
                left:50,top:15,right:20, bottom:25
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        };



        myChart.setOption(option);
    }

    render() {
        return (<div className="chartpanel">
                <div className="header">{this.props.title}</div>
                <div className="content">
                    <div id={this.props.uuid}  className="chart"></div>

                </div>
            </div>
        );
    }
}