import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <div className="nav-choose" style={{display : this.props.hasFinalResult? null : "none"}} 
                        onClick={this.props.showFinalResult}>
                        <span title="Show result" className="material-icons-outlined md-36 fade"> equalizer </span>
                    </div>
                    <div className="nav-choose" onClick={this.props.export}>
                        <span title="Export to JPG" className="material-icons-outlined md-36 fade"> download </span>
                    </div>
                    <div className="nav-choose" onClick={this.props.reset}>
                        <span title="Reset all team!" className="material-icons-outlined md-36 fade"> restart_alt </span>
                    </div>
                    <div className="nav-choose" onClick={this.props.setting}>
                        <span title="Setting" className="material-icons-outlined md-36 fade"> settings </span>
                    </div>
                    <div className="nav-choose" onClick={this.props.showAboutMe}>
                        <span title="About me" className="material-icons-outlined md-36 fade"> info </span>
                    </div>
                </nav>
                {
                    this.props.showTitle && this.props.title.length + this.props.subTitle.length > 0 ? (
                        <div className="heading-container">
                            <div className="heading">{this.props.title}</div>
                            <div className="subhead">{this.props.subTitle}</div>
                        </div>
                    ): null
                }
            </div>
        )
    }
}
