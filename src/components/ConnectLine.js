import React, { Component } from 'react'
import { SIZE_X_BOARD, SIZE_Y_BOARD } from '../general/_constant';
import { v4 as uuidv4 } from 'uuid';

export default class ConnectLine extends Component {
    render() {
        const [firstXY, secondXY] = this.props.model.child.map(i => i.location);
        const result = this.props.model.won !== "" ? this.props.model.result : "";
        const resultHtml = result !== "" ? (
            <div className="result"><p>{result.split("-").map(r => <span key={uuidv4()}>{r}</span>)}</p></div>
        ): "";
        const beginLineP1 = {
            x : firstXY.x + SIZE_X_BOARD, 
            y : firstXY.y + SIZE_Y_BOARD/2,
        }
        const endLineP1 = {
            x : secondXY.x + SIZE_X_BOARD, 
            y : secondXY.y + SIZE_Y_BOARD/2,
        }
        const styleLineP1 = {
            gridColumnStart : beginLineP1.x,
            gridRow : `${beginLineP1.y}/${endLineP1.y}`
        }
        const styleLineP2 = {
            gridColumn :  `${beginLineP1.x+1}/ span 2`,
            gridRowStart: `${(beginLineP1.y+endLineP1.y)/2}`, 
        }
        return (
            <> 
                <div style={styleLineP1} className="line-p1" />
                <div style={styleLineP2} className="line-p2">
                    {this.props.showResult ? resultHtml : ""}
                </div>
            </>
        )
    }
}
