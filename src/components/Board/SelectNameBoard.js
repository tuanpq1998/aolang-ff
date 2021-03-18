import React, { Component } from 'react'
import { SIZE_X_BOARD, SIZE_Y_BOARD } from '../../general/_constant';

export default class SelectNameBoard extends Component {
    
    render() {
        const {x, y} = this.props.location;
        const team = this.props.model;
        const style = {
            gridColumn: `${x}/span ${SIZE_X_BOARD}`,
            gridRow: `${y}/span ${SIZE_Y_BOARD}`,
            borderLeft : team != null ? `0.41vw solid ${team.color}` : null,
            color : this.props.isFinal ? "gold" : null,
        }

        return (
            <>
            <div onClick={this.props.onClick} style={style} className="team">
                {this.props.isFinal ? <span className="material-icons-outlined md-36 gold">emoji_events</span> : ""}
                {team !== null ? team.teamName : ""}
            </div>
            
            </>
        )
    }
}
