function Currentchance({ returnturnitems}) {
  return (
    <div className="chanceshow">
                <img src={returnturnitems.src} alt={returnturnitems.alt} />

          <h1>chance:</h1>
          <h2 id="player">{returnturnitems.player}</h2>
    </div>
  );
}
export default Currentchance;
