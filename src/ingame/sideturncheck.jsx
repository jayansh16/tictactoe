function currentchance({turn}){
  return(
  <div className="chanceshow">
    <h1>chance:</h1>
    {turn==cross? 
    <div className="turnshow">
      <img src="" alt="" />
      <h2 id="player1">{player1}:{}</h2>
    </div>
    :
    <div className="turnshow">
      <img src="" alt="" />
     <h2 id="player2">{player2}:{}</h2>
     </div>
    }
     
  </div>
  )
}
export default currentchance