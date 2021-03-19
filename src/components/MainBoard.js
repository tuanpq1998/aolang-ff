import React, { Component } from 'react'
import { TYPE_8P_1V1 } from '../general/_constant';
import { GET_INIT_SETTINGS, GET_TEMPLATE_BOARD } from '../general/_initital';
import ConnectLine from './ConnectLine'
import InputNameBoard from './Board/InputNameBoard'
import SelectNameBoard from './Board/SelectNameBoard';
import InputBoardDialog from './Dialog/InputBoardDialog';
import SelectBoardDialog from './Dialog/SelectBoardDialog';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import SettingDialog from './Dialog/SettingDialog';
import { exportComponentAsJPEG } from 'react-component-export-image';
import AlertDiaglog from './Dialog/AlertDialog';


export default class MainBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : GET_TEMPLATE_BOARD(TYPE_8P_1V1),
            displayInputDialog : false,
            displaySettingDialog : false,
            editingId : "",
            displaySelectDialog : false,
            setting : GET_INIT_SETTINGS(),
            displayAlertDialog : false,
            displayFinalResultDialog : false,
            displayAboutMeDialog : false,
        }
        this.handleSubmitInputDialog = this.handleSubmitInputDialog.bind(this);
        this.handleSubmitSettingDialog = this.handleSubmitSettingDialog.bind(this);
        this.componentRef = React.createRef();
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem("data")) !== null ? 
            JSON.parse(localStorage.getItem("data")) : GET_TEMPLATE_BOARD(TYPE_8P_1V1);
        const setting = JSON.parse(localStorage.getItem("setting")) !== null ? 
            JSON.parse(localStorage.getItem("setting")) : GET_INIT_SETTINGS();
        this.setState({
            data, setting
        })
    }

    saveTeamData() {
        localStorage.setItem("data", JSON.stringify(this.state.data));
    }

    saveSettingData() {
        localStorage.setItem("setting", JSON.stringify(this.state.setting));
    }

    handleClickInputBoard = (e) => {
        this.setState({
            displayInputDialog : true, 
            editingId : e
        })
    }

    handleClickSettingIcon = () => {
        this.setState({
            displaySettingDialog : true, 
        })
    }

    handleClickSelectBoard = (e) => {
        this.setState({
            displaySelectDialog : true, 
            editingId : e
        })
    }

    handleCloseInputDialog = () => {
        this.setState({
            displayInputDialog : false
        })
    }

    handleCloseSelectDialog = () => {
        this.setState({
            displaySelectDialog : false
        })
    }

    handleCloseSettingDialog = () => {
        this.setState({
            displaySettingDialog : false
        })
    }

    handleCloseAlertDialog = () => {
        this.setState({
            displayAlertDialog : false,
        })
    }

    handleSubmitInputDialog = (newObj) => {
        var data = this.state.data;
        const id = newObj.id;
        data[id].teamName = newObj.teamName;
        data[id].color = newObj.color;
        data[id].disable = newObj.disable;
        if (newObj.disable) {
            const next = data[id].next;
            const restTeamId = Object.keys(data[next].child).find(k => k !== id);
            if (data[restTeamId].disable) {
                data[id].disable = false;
                this.setState({
                    displayAlertDialog : true
                })
                return;
            } else {
                data[next].won = Object.keys(data[next].child).find(k => k !== id);
                data[next].result = "";
                const nextnext = data[next].next;
                data[nextnext].child[next] = data[next].won;
            }
        }
        this.setState({
            data
        });
        this.saveTeamData();
    }

    handleSubmitSelectDialog = (newObj) => {
        var data = this.state.data;
        const id = newObj.id;
        data[id].won = newObj.won;
        data[id].result = newObj.result;
        const next = data[id].next;
        if (next) data[next].child[id] = newObj.won;
        if (newObj.isFinal) 
            this.setState({
                displayFinalResultDialog : true
            })
        this.setState({
            data
        });
        this.saveTeamData();
    }

    handleClickShowFinalResultDialog = () => {
        this.setState({
            displayFinalResultDialog : true,
        })
    }

    handleClickAboutMeDialog = () => {
        this.setState({
            displayAboutMeDialog : true
        })
    }

    handleCloseAboutMeDialog = () => {
        this.setState({
            displayAboutMeDialog: false
        })
    }

    handleCloseFinalResultDialog = () => {
        this.setState({
            displayFinalResultDialog : false
        })
    }

    handleSubmitSettingDialog = (newSetting) => {
        this.setState({
            setting : {
                ...this.state.setting,
                ...newSetting
            }
        }, () => {
            if (newSetting.remember) {
                this.saveTeamData();
                this.saveSettingData();
            } else localStorage.clear();
        })
    }

    resetAllTeams = () => {
        this.setState({
            data : GET_TEMPLATE_BOARD(TYPE_8P_1V1)
        }, () => this.saveTeamData())
        
    }

    resetToDefaultSetting = () => {
        this.setState({
            setting : GET_INIT_SETTINGS(),
        }, () => this.saveSettingData())
    }

    render() {
        const {title, subTitle, background, showResult, showTitle} = this.state.setting;
        const {editingId, data, displayInputDialog, displaySelectDialog, displaySettingDialog, displayAlertDialog
            , displayFinalResultDialog, displayAboutMeDialog} = this.state;
        const model4Input = displayInputDialog ? {...data[editingId], id : editingId} : null;
        const model4Select = displaySelectDialog ? {
            ...data[editingId], 
            id : editingId, 
            child : Object.values(data[editingId].child).filter(c => c !== "").map(p => ({
                id : p, 
                ...data[p]
            }))
        } : null;
        const finalKey = "w";
        const hasFinalResult = data[finalKey].won !== "";
        const model4FinalResult = displayFinalResultDialog ? {
            ...data[finalKey],
            child : Object.values(data[finalKey].child).filter(c => c !== "").map(p => ({
                id : p, 
                ...data[p]
            }))
        }: null;
        return (
            <div ref={this.componentRef}>
            <Header reset={this.resetAllTeams} setting={() => this.handleClickSettingIcon()}
                hasFinalResult={hasFinalResult} showFinalResult={() => this.handleClickShowFinalResultDialog()} 
                export={() => exportComponentAsJPEG(this.componentRef, {fileName : `${title} - ${subTitle}.jpg`})}
                title={title} subTitle={subTitle} showTitle={showTitle} showAboutMe={this.handleClickAboutMeDialog}/> 
            <div id="main-board" style={{backgroundImage : `url(${background})`}}>

                <SettingDialog display={displaySettingDialog} close={this.handleCloseSettingDialog} setting={this.state.setting}
                    submit={this.handleSubmitSettingDialog} reset={this.resetToDefaultSetting} />

                <AlertDiaglog display={displayAlertDialog} close={this.handleCloseAlertDialog} result={model4FinalResult} 
                    displayFinalResult={displayFinalResultDialog} closeFinalResult={this.handleCloseFinalResultDialog}
                    displayAboutMe={displayAboutMeDialog} closeAboutMe={this.handleCloseAboutMeDialog}/>

                <InputBoardDialog close={this.handleCloseInputDialog} display={displayInputDialog} 
                    model={model4Input} submit={this.handleSubmitInputDialog}/>

                <SelectBoardDialog model={model4Select}
                close={this.handleCloseSelectDialog} display={displaySelectDialog} submit={this.handleSubmitSelectDialog}/>

                {Object.keys(data).filter(o => o.startsWith("t")).map(k => (
                    <InputNameBoard onClick={() => this.handleClickInputBoard(k)} disable={data[k].disable}
                        key={uuidv4()} location={data[k].location} teamName={data[k].teamName} borderColor={data[k].color}/>
                ))}

                {Object.keys(data).filter(o => o.startsWith("w")).map(k => (
                    <>
                        <ConnectLine key={uuidv4()} showResult={showResult} model={{
                             ...data[k], 
                             child : Object.keys(data[k].child).map(_key => data[_key])
                        }}/>
                        <SelectNameBoard isFinal={data[k].isFinal} model={data[k].won !== "" ? data[data[k].won] : null} 
                            onClick={() => this.handleClickSelectBoard(k)} key={uuidv4()} location={data[k].location} />
                    </>
                ))}
            </div>
            <div className="footer">{new Date().toLocaleDateString()}</div>
        </div>)
    }
}
