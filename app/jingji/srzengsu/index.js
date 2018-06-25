/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import moment from 'moment';
import '../../main/main.less';

export default class ShouRuZengSu extends React.Component {

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
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                formatter: function (params) {
                    var tar;
                    if (params[1].value != '-') {
                        tar = params[1];
                    }
                    else {
                        tar = params[0];
                    }
                    return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
                }
            },
            legend: {
                data:['下降','增长']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top:20,
                containLabel: true
            },
            xAxis: {
                type : 'category',
                splitLine: {show:false},
                data :  function (){
                    var list = [];
                    for (var i = 1; i <= 8; i++) {
                        list.push('201' + i + '年');
                    }
                    return list;
                }()
            },
            yAxis: {
                type : 'value'
            },
            series: [
                {
                    name: '辅助',
                    type: 'bar',
                    stack: '总量',
                    itemStyle: {
                        normal: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        },
                        emphasis: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689]
                },
                {
                    name: '收入',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    data: [900, 345, 393, '-', '-', 135, 178, 286]
                },
                {
                    name: '支出',
                    type: 'bar',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'bottom'
                        }
                    },
                    data: ['-', '-', '-', 108, 154, '-', '-', '-']
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