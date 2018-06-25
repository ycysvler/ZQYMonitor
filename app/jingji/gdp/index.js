/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import moment from 'moment';
import '../../main/main.less';

export default class GDP extends React.Component {

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
            color: ['#003366', '#006699', '#4cabce', '#e5323e'],

            legend: {
                data: ['Forest', 'Steppe', 'Desert', 'Wetland']
            },

            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    axisTick: {show: false},
                    data: ['2012', '2013', '2014', '2015', '2016']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Forest',
                    type: 'bar',
                    barGap: 0,
                    data: [320, 332, 301, 334, 390]
                },
                {
                    name: 'Steppe',
                    type: 'bar',
                    data: [220, 182, 191, 234, 290]
                },
                {
                    name: 'Desert',
                    type: 'bar',
                    data: [150, 232, 201, 154, 190]
                },
                {
                    name: 'Wetland',
                    type: 'bar',
                    data: [98, 77, 101, 99, 40]
                }
            ]
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