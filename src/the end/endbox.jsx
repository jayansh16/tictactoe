function Showend(turngame) {
  function handlerestart() {
    const placeholder = "to restart game";
    turngame(false);
  }
  return (
    <div className="endbox">
      <h1>winner</h1>
      <img src="" alt="" />
      <h3>{player}</h3>
      <button onClick={()=>handlerestart()}>restart game</button>
    </div>
  );
}

export default Showend;
