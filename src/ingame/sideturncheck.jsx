function Currentchance({ returnturnitems}) {
  const data = typeof returnturnitems==="function" ? returnturnitems() : returnturnitems;

  return (
    <div className="chanceshow">
                <img src={data.src} alt={data.alt} />

          <h1>chance:</h1>
          <h2 id="player">{data.player}</h2>
    </div>
  );
}
export default Currentchance;
