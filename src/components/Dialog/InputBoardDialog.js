import React, { Component } from 'react';
import ReactModal from 'react-modal';

export default class InputBoardDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName : "",
            color : "",
            disable : 0
        }
        this.initState = this.initState.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleInput(e) {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit({
            ...this.props.model,
            teamName : this.state.teamName === "" ? this.props.model.teamName : this.state.teamName,
            color : this.state.color === "" ? this.props.model.color : this.state.color,
            disable : this.state.disable
        });
        this.props.close();
        
    }

    handleCheckbox() {
        this.setState({
            disable : this.state.disable===0 ? !this.props.model.disable : !this.state.disable
        })
    }

    initState() {
        this.setState({
            teamName : "",
            color : "",
            disable : 0,
        })
    }

    render() {
        const {teamName, color, disable} = this.props.model ? this.props.model : {
            teamName : "",
            color : "",
            disable : 0
        };
        return (
            <>
                <ReactModal isOpen={this.props.display} shouldFocusAfterRender={true} onRequestClose={this.props.close}
                    onAfterClose={this.initState} className="modal" closeTimeoutMS={500}
                    overlayClassName="overlay"> 
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="box_header">
                            Input
                        </div>
                        <div className="box_body">
                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Name: </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="teamName" maxLength="19" 
                                        onInput={(event) => this.handleInput(event)} defaultValue={teamName}  />
                                </div>
                            </div>

                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Color: </label>
                                </div>
                                <div className="right">
                                    <input type="color" name="color" onInput={(event) => this.handleInput(event)} defaultValue={color}  />
                                </div>
                            </div>

                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Image: </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="image" disabled  />
                                </div>
                            </div>

                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Disable: </label>
                                </div>
                                <div className="right">
                                    <input defaultChecked={disable} onChange={this.handleCheckbox} type="checkbox" name="disable" value="1"/>
                                </div>
                            </div>

                        </div>
                        <div className="box_footer">
                            <button onClick={this.props.close} className="btn btn-cancel" type="button" >Cancel</button>
                            <input className="btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </ReactModal>
            </>
        )
    }
}
