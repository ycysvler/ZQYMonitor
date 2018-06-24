/**
 * Created by yanggang on 2017/3/6.
 */
import React from 'react';
import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
import {Button, Popover, Modal} from 'antd';
import {Map, Marker, NavigationControl, InfoWindow} from 'react-bmap';
import {AlarmActions, AlarmStore} from '../../alarm/reflux.js';
import Config from 'config';
import Info from '../../police/nav/info';

import '../index.less';

export default class PoliceMarker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: false, dialog_visibility: false, active: this.props.active};
    }

    componentWillUnmount() {
    }

    onStatusChange = (type, data) => {
    }

    componentDidMount() {
    }

    onClick = () => { 
        this.setState({dialog_visibility: !this.state.dialog_visibility});
    }

    showInfo = (event) => {
        this.setState({dialog_visibility:false, visible: true});
        // AlarmActions.showInfo(this.props.item.id);
    }
    handleCancel = (e) => {
        this.setState({dialog_visibility:false,visible: false});
    }

    content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );

    render() {

        let icon = "/icons/icon_xunluo_map@2x.png";
        let active = this.state.active;


        switch (this.props.item.workStatus) {
            case 1:
                icon = active ? "/icons/icon_xunluo_map@3x.png" : "/icons/icon_xunluo_map@2x.png";
                break;
            case 2:
                icon = active ? "/icons/icon_beiqin_map@3x.png" : "/icons/icon_beiqin_map@2x.png";
                break;
            case 3:
                icon = active ? "/icons/icon_chujing_map@3x.png" : "/icons/icon_chujing_map@2x.png";
                break;
            case 4:
                icon = active ? "/icons/icon_zhiban_map@3x.png" : "/icons/icon_zhiban_map@2x.png";
                break;
        }

        document.log('marker > police > active', this.props.item.id, active, icon);

        return (
            <div  className="marker">
                <div className="img">
                    <Popover
                        title={null} visible={this.state.dialog_visibility}
                        content={

                        <div className="marker">
                            <div className="popover">
                                <div className="spacecenter">
                                    <h3>{this.props.item.title}</h3>
                                </div>
                                <div className="spacebetween">
                                    <h4>警情状态：</h4>
                                    <span
                                        style={{color: AlarmStore.getStatusColor(this.props.item.workStatus)}}>{AlarmStore.getStatusText(this.props.item.workStatus)}</span>
                                </div>
                                <div className="spacebetween">
                                    <h4>报警类型：</h4>
                                    <span>{AlarmStore.getAlarmTypeText(this.props.item.alarmType)}</span>
                                </div>
                                <div className="spacecenter" style={{paddingTop: 8}}>
                                    <Button onClick={this.showInfo} type="primary">查看详情</Button>
                                </div>
                            </div>
                        </div>
                    } >
                        <img onClick={this.onClick} src={Config.base + icon}/>
                    </Popover>

                </div>


                <Modal width={388}
                       title="警情" footer={null}
                       visible={this.state.visible}
                       onCancel={this.handleCancel}
                >
                    <div className="alarmnav">
                        <Info hideback/>
                    </div>
                </Modal>

            </div>
        );
    }
}