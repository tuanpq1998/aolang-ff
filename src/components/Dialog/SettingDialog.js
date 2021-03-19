import React, { Component } from 'react'
import ReactModal from 'react-modal';

export default class SettingDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : null,
            subTitle : null,
            background : null,
            showResult : 0,
            showTitle : 0,
            remember : 0,
        }
    }

    componentDidMount() {
        if(this.props.setting) {
            const {title, subTitle, background, showResult, showTitle, remember} = this.props.setting;
            this.setState({
                title,
                subTitle,
                background,
                showResult,
                showTitle,
                remember,
            })
        }
    }

    handleInput(e) {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    handleShowResultCheckBox() {
        this.setState({
            showResult : !this.state.showResult
        })
    }

    handleShowTitleCheckBox() {
        this.setState({
            showTitle : !this.state.showTitle
        })
    }

    handleRememberCheckBox() {
        this.setState({
            remember : !this.state.remember
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var newSetting = {
            title : this.state.title!=null ? this.state.title : this.props.setting.title,
            subTitle : this.state.subTitle!=null ? this.state.subTitle : this.props.setting.subTitle,
            background : this.state.background!=null ? this.state.background : this.props.setting.background,
            showResult : this.state.showResult,
            showTitle : this.state.showTitle,
            remember : this.state.remember,
        }
        this.props.submit(newSetting);
        this.props.close();
    }

    render() {
        const {title, subTitle, background, showResult, showTitle, remember} = this.props.setting;
        return (
            <>
                <ReactModal isOpen={this.props.display} shouldFocusAfterRender={true} onRequestClose={this.props.close}
                    className="modal" overlayClassName="overlay" closeTimeoutMS={500}>
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="box_header">
                            Setting
                        </div>
                        <div className="box_body" style={{padding: "20px 30px"}}>
                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Title: </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="title" maxLength="11"
                                        onInput={(event) => this.handleInput(event)} defaultValue={title}  />
                                </div>
                            </div>

                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">SubTitle: </label>
                                </div>
                                <div className="right">
                                    <input type="text" name="subTitle"  maxLength="9"
                                        onInput={(event) => this.handleInput(event)} defaultValue={subTitle}  />
                                </div>
                            </div>

                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Show title: </label>
                                </div>
                                <div className="right">
                                    <input defaultChecked={showTitle} onChange={() => this.handleShowTitleCheckBox()} type="checkbox" name="showTitle" value="1"/>
                                </div>
                            </div>

                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Background Image URL: </label>
                                </div>
                                <div className="right">
                                    <input type="url" name="background" 
                                        onInput={(event) => this.handleInput(event)} defaultValue={background}  />
                                </div>
                            </div>

                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Show result: </label>
                                </div>
                                <div className="right">
                                    <input defaultChecked={showResult} onChange={() => this.handleShowResultCheckBox()} type="checkbox" name="showResult" value="1"/>
                                </div>
                            </div>

                            <div className="flex-container">
                                <div className="left">
                                    <label htmlFor="">Remember setting & data: </label>
                                </div>
                                <div className="right">
                                    <input defaultChecked={remember} onChange={() => this.handleRememberCheckBox()} type="checkbox" name="remember" value="1"/>
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
