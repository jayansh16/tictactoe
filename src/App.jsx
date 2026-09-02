import Game from "./ingame/game";
import Gamestart from "./gamestart/playerset";
import Gameend from "./the end/endbox";
import { useState } from "react";

function App() {
  //states and main hooks and data
  const [playerdata, setplayerdata] = useState([
    {
      symbol: "cross",
      img: {
        src: "./assets/cross.png",
        alt: "cross",
      },
      playername: "player 1",
      ownedboxes: [],
    },
    {
      symbol: "zero",
      img: {
        src: "./assets/zero.png",
        alt: "zero",
      },
      playername: "player 2",
      ownedboxes: [],
    },
  ]);
  const [gameon, turngame] = useState(false);
  const [won, showwon] = useState(null);
  const [turn, changeturn] = useState("cross");
  const [box, setbox] = useState([
    { id: 1, symbol: null },
    { id: 2, symbol: null },
    { id: 3, symbol: null },
    { id: 4, symbol: null },
    { id: 5, symbol: null },
    { id: 6, symbol: null },
    { id: 7, symbol: null },
    { id: 8, symbol: null },
    { id: 9, symbol: null },
  ]);
  //game start page
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
  // in game 
  //box stuff 
  function fillboxes(id) {
    if (playerdata[0].ownedboxes.includes(id)) {
      return {
        src: playerdata[0].img.src,
        alt: playerdata[0].img.alt,
      };
    } else if (playerdata[1].ownedboxes.includes(id)) {
      return {
        src: playerdata[1].img.src,
        alt: playerdata[1].img.alt,
      };
    } else {
      return null;
    }
  }
  function returnturnitems() {
    if (turn === "cross") {
      return {
        player: playerdata[0].playername,
        src: playerdata[0].img.src,
        alt: playerdata[0].img.alt,
      };
    } else {
      return {
        player: playerdata[1].playername,
        src: playerdata[1].img.src,
        alt: playerdata[1].img.alt,
      };
    }
  }
  function handlebox(boxnumber) {
    const boxId = typeof boxnumber === "object" ? boxnumber.id : boxnumber;
    const owned = [...playerdata[0].ownedboxes, ...playerdata[1].ownedboxes];
    if (owned.includes(boxnumber)) {
      alert("pick an empty box");
      return;
    }
    const newBoxState = box.map(b => b.id===boxId ? {...b, symbol:turn} : b);
setbox(newBoxState);
setplayerdata(prev => prev.map(p => p.symbol===turn ? {...p, ownedboxes:[...p.ownedboxes, boxId]} : p));

const result = definevictory(newBoxState);
if (result) return;
     changeturn(turn==="cross" ? "zero" : "cross");
    
  }
  //game end
  function definevictory(boxesToCheck) {
  const checkBoxes = boxesToCheck || box;

  const winnerCombos = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9], // rows
    [1, 4, 7],[2, 5, 8],[3, 6, 9], // cols
    [1, 5, 9],[3, 5, 7],           // diags
  ];

  for (const combo of winnerCombos) {
    const [a,b,c] = combo;
    const s1 = checkBoxes.find(x=>x.id===a)?.symbol;
    const s2 = checkBoxes.find(x=>x.id===b)?.symbol;
    const s3 = checkBoxes.find(x=>x.id===c)?.symbol;
    if (s1 && s1===s2 && s1===s3) {
      showwon(s1); // "cross" or "zero"
      return s1;
    }
  }

  const isDraw = checkBoxes.every(b=>b.symbol!==null);
  if (isDraw) {
    showwon("draw");
    return "draw";
  }
  return null;
  }
  function findwinnerdata(){
    const win =definevictory()
    if (win===null){
      return null
    }
    else if (win === "draw"){
      return "no winner";
    }
    else if (win==="cross"){
      return{
        winner:win,
        winnername:playerdata[0].playername,
        src:playerdata[0].img.src,
        alt:playerdata[0].img.alt
      }
    }
    else if (win==="zero"){
      return{
        winner:win,
        winnername:playerdata[1].playername,
        src:playerdata[1].img.src,
        alt:playerdata[1].img.alt
      }
    }
  }
  const wondata = findwinnerdata()
  function handlerestart() {
    setplayerdata((prev) =>
      prev.map((p, index) => ({
        ...p,
        playername: index === 0 ? "player 1" : "player 2", 
        ownedboxes: [],
      })),
    );
    setbox((prev) => prev.map((b) => ({ ...b, symbol: null })));
    showwon(null);
    changeturn("cross")    
    turngame(false);
    
  }
//-----------------
//mainframe
//=================
  if (gameon) {
    if (won===null) {
      return (
        <Game
          returnturnitems={returnturnitems}
          box={box}
          handlebox={handlebox}
          fillboxes={fillboxes}
        />
      );
    } else {
      return (<Gameend 
        handlerestart={handlerestart} 
        wondata={wondata}
        />
      );
    }
  } else {
    return (
    <Gamestart 
      playerdata={playerdata} 
      handlestart={handlestart} 
      setplayerdata={setplayerdata}
      />
    );
  }
}

export default App;
