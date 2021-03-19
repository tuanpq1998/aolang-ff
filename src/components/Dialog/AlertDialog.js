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
        if (this.props.displayAboutMe) {
            return (
                <ReactModal isOpen={this.props.displayAboutMe} shouldFocusAfterRender={true} 
                    onRequestClose={this.props.closeAboutMe} className="modal" closeTimeoutMS={500} overlayClassName="overlay"> 
                        <form>
                        <div className="box_header">
                            About me
                        </div>
                        <div className="box_body about-me">
                            <p>Author: Pham Quang Tuan (with 💖 & reactjs)</p>
                            <p>Git: <a href="https://github.com/tuanpq1998">tuanpq1998</a></p>
                            <p>More:</p>
                            <img className="qr-image" alt="qr-image" 
                                src="data:image/png;base64,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"/>
                        </div>
                        </form>
                </ReactModal>
            )
        }
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
                        <p>Cannot disable two team in same branch!</p>
                    </div>
                    <div className="box_footer">
                        <div onClick={this.props.close} className="btn">OK</div>
                    </div>

                    </form>
            </ReactModal>
        )
    }
}
