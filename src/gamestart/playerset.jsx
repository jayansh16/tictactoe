function Playerchoose({ handlestart }) {
  const player1 = document.querySelector("#player1").value;
  const player2 = document.querySelector("#player2").value;
  
  return (
    <div className="choose">
      <div className="options">
        <img src="" alt="cross" />
        <label htmlFor="cross-name">
          <input
            type="text"
            className="chooseinput"
            defaultValue="player1"
            id="player1"
          />
        </label>
      </div>
      <div className="options">
        <img src="" alt="cross" />
        <label htmlFor="cross-name">
          <input
            type="text"
            className="chooseinput"
            defaultValue="player2"
            id="player2"
          />
        </label>
      </div>
      <button className="startgame" onClick={()=>handlestart(player1,player2)}></button>
    </div>
  );
}

export default Playerchoose;
