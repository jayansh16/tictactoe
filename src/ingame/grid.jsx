const box = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function grid({ playerdata, setplayerdata, turn, changeturn, showwon }) {
  function handlebox(n) {
    const owned = playerdata.flatMap((obj) => obj.ownedboxes);
    if (n in owned) {
      alert("pick an empty box");
      return;
    } else {
      if ((turn = cross)) {
      }
    }
    if (turn == "cross") {
      changeturn("zero");
    } else if (turn == "zero") {
      changeturn("cross");
    }
  }
  return box.map((n) => (
    <div className="gridbox" id={n}>
      <button id={n} onClick={()=>handlebox(n)}>
        <img src={playerdata.img.src} alt="box" />
      </button>
    </div>
  ));
}
export default grid;
