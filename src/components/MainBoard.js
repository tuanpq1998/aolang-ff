import React, { Component } from 'react'
import { TYPE_8P_1V1 } from '../general/_constant';
import { GET_TEMPLATE_BOARD } from '../general/_initital';
import ConnectLine from './ConnectLine'
import InputNameBoard from './Board/InputNameBoard'
import SelectNameBoard from './Board/SelectNameBoard';
import InputBoardDialog from './Dialog/InputBoardDialog';
import SelectBoardDialog from './Dialog/SelectBoardDialog';
import { v4 as uuidv4 } from 'uuid';

export default class MainBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : GET_TEMPLATE_BOARD(TYPE_8P_1V1),
            displayInputDialog : false,
            editingId : "",
            displaySelectDialog : false,
        }
        this.handleSubmitInputDialog = this.handleSubmitInputDialog.bind(this);
    }

    handleClickInputBoard = (e) => {
        this.setState({
            displayInputDialog : true, 
            editingId : e
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

    handleSubmitInputDialog = (newObj) => {
        var data = this.state.data;
        const id = newObj.id;
        data[id].teamName = newObj.teamName;
        data[id].color = newObj.color;
        this.setState({
            data
        });
    }

    handleSubmitSelectDialog = (newObj) => {
        var data = this.state.data;
        const id = newObj.id;
        data[id].won = newObj.won;
        data[id].result = newObj.result;
        const next = data[id].next;
        if (next) data[next].child[id] = newObj.won;
        this.setState({
            data
        });
    }

    render() {
        const {editingId, data, displayInputDialog, displaySelectDialog} = this.state;
        const model4Input = displayInputDialog ? {...data[editingId], id : editingId} : null;
        const model4Select = displaySelectDialog ? {
            ...data[editingId], 
            id : editingId, 
            child : Object.values(data[editingId].child).filter(c => c !== "").map(p => ({
                id : p, 
                ...data[p]
            }))
        } : null;
        return ( 
            <div id="main-board">
                <InputBoardDialog close={this.handleCloseInputDialog} display={displayInputDialog} 
                    model={model4Input} submit={this.handleSubmitInputDialog}/>
                <SelectBoardDialog model={model4Select}
                close={this.handleCloseSelectDialog} display={displaySelectDialog} submit={this.handleSubmitSelectDialog}/>
                {Object.keys(data).filter(o => o.startsWith("t")).map(k => (
                    <InputNameBoard onClick={() => this.handleClickInputBoard(k)}
                        key={uuidv4()} location={data[k].location} teamName={data[k].teamName} borderColor={data[k].color}/>
                ))}
                {Object.keys(data).filter(o => o.startsWith("w")).map(k => (
                    <>
                        <ConnectLine key={uuidv4()} model={{
                             ...data[k], 
                             child : Object.keys(data[k].child).map(_key => data[_key])
                        }}/>
                        <SelectNameBoard model={data[k].won !== "" ? data[data[k].won] : null} 
                            onClick={() => this.handleClickSelectBoard(k)} key={uuidv4()} location={data[k].location} />
                    </>
                ))}
            </div>
        )
    }
}
