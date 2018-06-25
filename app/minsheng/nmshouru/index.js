/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import moment from 'moment';
import '../../main/main.less';

export default class NMShouRu extends React.Component {

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
            calculable : true,
            series : [

                {
                    name:'面积模式',
                    type:'pie',
                    radius : [10, 60],
                    center : ['75%', '50%'],
                    roseType : 'area',
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'},
                        {value:25, name:'rose4'},
                        {value:20, name:'rose5'},
                        {value:35, name:'rose6'},
                        {value:30, name:'rose7'},
                        {value:40, name:'rose8'}
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