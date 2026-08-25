import { useState } from "react"

const [playerdata,setplayerdata]=useState([
        {
        symbol:"cross",
        img: "./assets/cross.png",
        playername:"player 1",
        ownedboxes:[]
        },
        {
        symbol:"zero",
        img: "./assets/zero.png",
        playername:"player 2",
        ownedboxes:[]
        }
    ])
