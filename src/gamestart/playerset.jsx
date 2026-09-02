function Playerchoose({playerdata, handlestart }) {
  return (
    <div className="choose">
      <div className="options">
        <img src="" alt="cross" />
        <label htmlFor="cross-name">
          <input
            type="text"
            className="chooseinput"
            defaultValue={playerdata[0].playername}
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
            defaultValue={playerdata[1].playername}
            id="player2"
          />
        </label>
      </div>
      <button className="startgame" onClick={()=>function(){
        const player1 = document.querySelector("#player1").value;
        const player2 = document.querySelector("#player2").value;
        handlestart(player1,player2)
        }}></button>
    </div>
  );
}

export default Playerchoose;
