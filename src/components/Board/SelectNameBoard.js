import React, { Component } from 'react'
import { SIZE_X_BOARD, SIZE_Y_BOARD } from '../../general/_constant';

export default class SelectNameBoard extends Component {
    
    render() {
        const {x, y} = this.props.location;
        const team = this.props.model;
        const style = {
            gridColumn: `${x}/span ${SIZE_X_BOARD}`,
            gridRow: `${y}/span ${SIZE_Y_BOARD}`,
            borderLeft : team != null ? `6px solid ${team.color}` : null,
        }

        return (
            <div onClick={this.props.onClick} style={style} className="team">
                {team !== null ? team.teamName : ""}
            </div>
        )
    }
}
