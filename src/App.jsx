import Game from "./game"
import Gamestart from "./gamestart"
import { useState } from "react"

const [playerdata,setplayerdata]=useState([
        {
        symbol:"cross",
        img: {
            src:"./assets/cross.png",
            alt:"cross"
        
        },
        playername:"player 1",
        ownedboxes:[],
        currentturn:true
        },
        {
        symbol:"zero",
        img: {
            src:"./assets/zero.png",
            alt:"zero"
        },
        playername:"player 2",
        ownedboxes:[],
        currentturn:false
        }
    ])
function app(){
    if (gameon){
        return(
            <Game 
                playerdata={playerdata}
                setplayerdata={setplayerdata()}
            />
        )
    }
    else {
        return(
            <Gamestart 
                playerdata={playerdata}
                setplayerdata={setplayerdata()}
            />
        )
    }
}

export default app