import Game from "./ingame/game"
import Gamestart from "./gamestart/playerset"
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
const [turn,changeturn]=useState("cross")
function app(){
    if (gameon){
        return(
            <Game 
                playerdata={playerdata}
                setplayerdata={setplayerdata()}
                turn={turn}
                changeturn={changeturn}
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