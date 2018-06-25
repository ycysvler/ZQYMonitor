/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import moment from 'moment';
import '../../main/main.less';

export default class HangYeFenBu extends React.Component {

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
            tooltip: {
                show:false,
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                show:false,
                orient: 'vertical',
                x: 'left',
                data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    selectedMode: 'single',
                    radius: [0, '30%'],

                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直达', selected:true},
                        {value:679, name:'营销广告'},
                        {value:1548, name:'搜索引擎'}
                    ]
                },
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['40%', '55%'],

                    data:[
                        {value:335, name:'直达'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1048, name:'百度'},
                        {value:251, name:'谷歌'},
                        {value:147, name:'必应'},
                        {value:102, name:'其他'}
                    ]
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