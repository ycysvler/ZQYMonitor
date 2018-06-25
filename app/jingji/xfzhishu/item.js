/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import moment from 'moment';
import {Tag} from 'antd';
import '../../main/main.less';

export default class XiaoFeiZhiShuItem extends React.Component {

    constructor(props) {
        super(props);
        moment.locale('zh-cn');

    }

    componentWillUnmount() {

    }


    componentDidMount() {
        this.showChart();
    }

    showChart = () => {

        var myChart = echarts.init(document.getElementById(this.props.uuid));

        var
            option = {
                color: ['blue', '#333333'],
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 10, name: '直接访问'},
                            {value: 90, name: '邮件营销'},

                        ]
                    }
                ]
            };

        myChart.setOption(option);
    }

    render() {
        return (<div className="chartpanel">
                <div className="content">
                    <div className="xfzs-item">
                        <div style={{position:'relative',flexGrow: 5}}>
                            <div id={this.props.uuid} className="chart"></div>
                            <div className='round'></div>
                        </div>
                        <div style={{height:30, textAlign:'center', flexGrow: 0}}>1111</div>
                        <div style={{flexGrow: 1}}>
                            <div className='tag'>
                                <Tag color="#f50">#f50</Tag>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        );
    }
}