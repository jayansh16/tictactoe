import Game from "./ingame/game"
import Gamestart from "./gamestart/playerset"
import Gameend from "./the end/endbox"
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
const [gameon,turngame]=useState(false)
const [won,showwon]=useState(false)
const [turn,changeturn]=useState("cross")
function app(){
    if (gameon){
        if (!won){return(
            <Game 
                playerdata={playerdata}
                setplayerdata={setplayerdata()}
                turn={turn}
                changeturn={changeturn}
                showwon={showwon()}
            />
        )}
        else{
            return(
            <Gameend
            turngame={turngame()}
            />)
        }
    }
    else {
        return(
            <Gamestart 
                playerdata={playerdata}
                setplayerdata={setplayerdata()}
                turngame={turngame()}
            />
        )
    }
}

export default app