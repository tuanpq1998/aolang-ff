import React, { Component } from 'react'
import ReactModal from 'react-modal';

export default class SelectBoardDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            won : "",
            result : [ null, null],
        }
        this.initState = this.initState.bind(this);
        this.t0Check = React.createRef();
        this.t1Check = React.createRef();
    }

    handleInput(e) {
        this.setState({
            won : e.target.value 
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.won !== ""){
            const {result, won} = this.state;
            const newResult = result.filter(e => e==null).length <= 1 
                ? result.map(e => e==null || e===""? 0 : e).join("-") : "";
            this.props.submit({
                ...this.props.model,
                won,
                result : newResult,
            });
        }
        this.props.close();
    }

    handleResInput(event, team) {
        var {result} = this.state;
        result[team] = event.target.value;
        var won = "";
        if (result[0] !== result[1]) {
            if (Number(result[0]==null?0:result[0]) > Number(result[1]==null?0:result[1])) {
                won = this.props.model.child[0].id;
                this.t0Check.current.checked = true;
                this.t1Check.current.checked = false;
            } else {
                won = this.props.model.child[1].id;
                this.t0Check.current.checked = false;
                this.t1Check.current.checked = true;
            }
        }
        this.setState({
            result,
            won
        })
        
    }

    initState() {
        this.setState({
            won : "",
            result : this.props.model ? (this.props.model.result !== "" ? this.props.model.result.split("-") : [null, null]) : [null, null],
        })
    }

    render() {
        const teams = this.props.model ? (this.props.model.child.length === 2 ? this.props.model.child : null ): null;
        const wonId = this.props.model ? this.props.model.won : "";
        const result = this.props.model ? this.props.model.result : "";
        var {won} = this.state;

        const boxHeaderText = teams ? "Select" : "Error";

        const boxBody = teams ? (<>
            <div className="flex-container">
                <div className="left-select">
                    <input ref={this.t0Check} id={`sbd-${teams[0].id}`} defaultChecked={teams[0].id === won || wonId === teams[0].id} type="radio" key={`sbd-${teams[0].id}`}
                        onInput={(event) => this.handleInput(event)} name="won" value={teams[0].id} />
                    <label className="team" style={{borderLeft : `6px solid ${teams[0].color}`}} htmlFor={`sbd-${teams[0].id}`}>
                        {teams[0].teamName}
                    </label>
                </div>
                <div className="right-select">
                    <input ref={this.t1Check} id={`sbd-${teams[1].id}`} defaultChecked={teams[1].id === won || wonId === teams[1].id} type="radio" key={`sbd-${teams[1].id}`}
                        onInput={(event) => this.handleInput(event)} name="won" value={teams[1].id} />
                    <label className="team" style={{borderLeft : `6px solid ${teams[1].color}`}} htmlFor={`sbd-${teams[1].id}`}>
                        {teams[1].teamName}
                    </label>
                </div>
            </div>
            <div className="flex-container">
                <div className="left-select">
                    <label htmlFor="" style={{padding : '10px'}}>Result</label>
                    <input defaultValue={result.split("-")[0]} onInput={(event) => this.handleResInput(event, 0)} min={0} type="number" style={{float : 'right'}} name="res"/>
                </div>
                <div className="right-select">
                    <input defaultValue={result.split("-")[1]} onInput={(event) => this.handleResInput(event, 1)} min={0} type="number" name="res"/>
                </div>
            </div>
            <div className="flex-container">
                <div className="left-select">
                    <label htmlFor="" style={{padding : '10px'}}>Penalty</label>
                    <input disabled min={0} type="number" style={{float : 'right'}} name="res"/>
                </div>
                <div className="right-select">
                    <input disabled min={0} type="number" name="res"/>
                </div>
            </div> 
            </>) : (<p>Chưa nhập đủ kết quả!</p>);
        const boxFooter = teams ? (<>
            <button onClick={this.props.close} className="btn btn-cancel" type="button" >Cancel</button>
            <input className="btn" type="submit" value="Submit" />
        </>) : (
            <button className="btn" onClick={this.props.close}>Cancel</button>
        );
        return (
            <>
                <ReactModal isOpen={this.props.display} shouldFocusAfterRender={true} onRequestClose={this.props.close}
                    className="modal" onAfterClose={this.initState} 
                    overlayClassName="overlay">
                    <form onSubmit={(event) => this.handleSubmit(event)}>
                        <div className="box_header">
                            {boxHeaderText}
                        </div>
                        <div className="box_body" style={{padding: "20px 30px"}}>
                            {boxBody}
                        </div>
                        <div className="box_footer">
                            {boxFooter}
                        </div>
                    </form>
                </ReactModal>
            </>
        )
    }
}