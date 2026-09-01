import Game from "./ingame/game";
import Gamestart from "./gamestart/playerset";
import Gameend from "./the end/endbox";
import { useState } from "react";

function App() {
  const [playerdata, setplayerdata] = useState([
    {
      symbol: "cross",
      img: {
        src: "./assets/cross.png",
        alt: "cross",
      },
      playername: "player 1",
      ownedboxes: [],
      currentturn: true,
    },
    {
      symbol: "zero",
      img: {
        src: "./assets/zero.png",
        alt: "zero",
      },
      playername: "player 2",
      ownedboxes: [],
      currentturn: false,
    },
  ]);
  const [gameon, turngame] = useState(false);
  const [won, showwon] = useState(false);
  const [turn, changeturn] = useState("cross");
  const [box,setbox] = [
  {id:1,
    symbol:null
    
  },
  {id:2,
    symbol:null
    
  },
  {id:3,
    symbol:null
    
  },
  {id:4,
    symbol:null
    
  },
  {id:5,
    symbol:null
    
  },
  {id:6,
    symbol:null
    
  },
  {id:7,
    symbol:null
    
  },
  {id:8,
    symbol:null
    
  },
  {id:9,
    symbol:null
    
  },
];
  function handlestart(player1, player2) {
    const updatePlayerName = (index, newName) => {
      setplayerdata((prevData) =>
        prevData.map((player, i) =>
          i === index ? { ...player, playername: newName } : player,
        ),
      );
    };

    if (player1 === "") {
      return;
    } else {
      updatePlayerName(0, player1);
    }
    if (player2 === "") {
      return;
    } else {
      updatePlayerName(1, player2);
    }
    turngame(true);
  }
  function fillboxes(id){
    if (id in playerdata[0].ownedboxes){
      return {
        src:playerdata[0].img.src,
        alt:playerdata[0].img.alt
      }
    }
    else if (id in playerdata[1].ownedboxes){
      return {
        src:playerdata[1].img.src,
        alt:playerdata[1].img.alt
      }
    }
    else{
      return null
    }
  }
  function returnturnitems(){
    if (turn==="cross"){
      return {
        player: playerdata[0].playername,
        src:playerdata[0].img.src,
        alt:playerdata[0].img.alt
      }
    }
    else{
      return {
        player: playerdata[1].playername,
        src:playerdata[1].img.src,
        alt:playerdata[1].img.alt
      }
    }
  }
  function handlebox(boxnumber) {
    const owned = [...playerdata[0].ownedboxes, ...playerdata[1].ownedboxes]
    if (owned.includes(boxnumber)) {
      alert("pick an empty box");
      return;
    } 
    
    if (turn == "cross") {
      changeturn("zero");
      return
    } else if (turn == "zero") {
      changeturn("cross");
      return
    }
  }

  if (gameon) {
    if (!won) {
      return (
        <Game
          returnturnitems={returnturnitems}
          box={box}
          handlebox={handlebox}
          fillboxes={fillboxes}
        />
      );
    } else {
      return <Gameend turngame={turngame} />;
    }
  } else {
    return <Gamestart handlestart={handlestart} />;
  }
}

export default App;
