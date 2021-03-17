import React, { Component } from 'react'
import { SIZE_X_BOARD, SIZE_Y_BOARD } from '../../general/_constant';

class InputNameBoard extends Component {

    render() {
        const {x, y} = this.props.location;
        const style = {
            gridColumn: `${x}/${x+SIZE_X_BOARD}`,
            gridRow: `${y}/${y+SIZE_Y_BOARD}`,
            borderLeft : `6px solid ${this.props.borderColor}`,
        }
        return (
            <div onClick={this.props.onClick} style={style} className="team">
                {this.props.teamName}
            </div>
        )
    }
}

export default InputNameBoard;
