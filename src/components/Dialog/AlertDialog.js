import React, { Component } from 'react'
import ReactModal from 'react-modal'
import party from 'party-js';

export default class AlertDialog extends Component {

    getWidthOfText = (text, fsize, ffamily) => {
        var test = document.getElementById("Test");
        test.innerHTML = text;
        test.style.fontSize = "1.5vw";
        test.style.fontFamily = "Oswald";
        return (test.clientWidth + 1);
    }
    render() {
        if (this.props.displayFinalResult) {
            const {result} = this.props;
            const first = result.child.find(e => e.id === result.won).teamName;
            const second = result.child.find(e => e.id !== result.won).teamName;
            const fontSize = "1.5vw";
            const fontFamily = "Oswald";
            const style4First = {
                top: "170px",
                left: `${174.5-10-(Number(this.getWidthOfText(first, fontSize, fontFamily)))/2}px`,
                fontSize,
                fontFamily,
            }
            const style4Second = {
                top: "230px",
                right: `${156.5-10-(Number(this.getWidthOfText(second, fontSize, fontFamily)))/2}px`,
                fontSize,
                fontFamily,
            }
            party.screen();
            return (<>
                <ReactModal isOpen={this.props.displayFinalResult} shouldFocusAfterRender={true} onRequestClose={this.props.closeFinalResult}
                    className="modal-result" closeTimeoutMS={500}
                    overlayClassName="overlay"> 
                        <form>
                        <div className="box_header">
                            Result
                        </div>
                        <div className="box_body">
                            <span style={style4First} id="first">{first}</span>
                            <span style={style4Second} id="second">{second}</span>
                            <img className="result-img" src="https://i.imgur.com/tHXdl7T.png" alt="result-img"/>
                        </div>
                        

                        </form>
                </ReactModal>
                </>)
        }
        return (
            <ReactModal isOpen={this.props.display} shouldFocusAfterRender={true} onRequestClose={this.props.close}
                className="modal" 
                overlayClassName="overlay"> 
                    <form>
                    <div className="box_header">
                        Error
                    </div>
                    <div className="box_body">
                        <p>Không thể loại cả 2!</p>
                    </div>
                    <div className="box_footer">
                        <div onClick={this.props.close} className="btn">OK</div>
                    </div>

                    </form>
            </ReactModal>
        )
    }
}
