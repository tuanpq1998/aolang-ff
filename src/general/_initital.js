import { PADDING_X_BOARD, SIZE_X_BOARD, SIZE_X_LINE, SIZE_Y_BOARD, TYPE_8P_1V1 } from "./_constant";

const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

export const GET_TEMPLATE_BOARD = (type) => {
    switch(type){
        case TYPE_8P_1V1:
            var data = {}, child = {};
            for (var i=1; i<=8; i++) {
                data[`t${i}`] = {
                    teamName : `Team ${i}`,
                    location : {
                        x : 3,
                        y : 3+(i-1)*(SIZE_Y_BOARD+PADDING_X_BOARD),
                    },
                    image : "",
                    color : getRandomColor(),
                }

                if (i%2 === 0) {
                    child = {}
                    child[`t${i-1}`] = `t${i-1}`;
                    child[`t${i}`] = `t${i}`;

                    data[`w${i-1}${i}`] = {
                        child, 
                        result : "0-0",
                        pen : "",
                        won : "",
                        color : "",
                        location : {
                            x: (data[`t${i-1}`].location.x)+ SIZE_X_LINE + SIZE_X_BOARD,
                            y: (data[`t${i-1}`].location.y+data[`t${i}`].location.y)/2,
                        },
                    }
                }
                
                if (i%4 === 0) {
                    child = {}
                    child[`w${i-3}${i-2}`] = "";
                    child[`w${i-1}${i}`] = "";
                    data[`w${i-3}${i-2}${i-1}${i}`] = {
                        child,
                        result : "0-0",
                        pen : "",
                        won : "",
                        color : "",
                        location : {
                            x: data[`w${i-3}${i-2}`].location.x + SIZE_X_LINE + SIZE_X_BOARD,
                            y: (data[`w${i-3}${i-2}`].location.y+data[`w${i-1}${i}`].location.y)/2,
                        },
                    }
                }
            }
            data["w"] = {
                child : {
                    "w1234" : "",
                    "w5678" : "",
                },
                result : "0-0",
                pen : "",
                won : "",
                color : "",
                location : {
                    x: data["w1234"].location.x +  SIZE_X_LINE + SIZE_X_BOARD,
                    y: (data["w1234"].location.y+data["w5678"].location.y)/2,
                },
            }

            data["w12"].next =  "w1234";
            data["w34"].next ="w1234";
            data["w56"].next = "w5678";
            data["w78"].next = "w5678"
            data["w1234"].next  = "w";
            data["w5678"].next = "w"

            return data;
        default:

    }
        
}