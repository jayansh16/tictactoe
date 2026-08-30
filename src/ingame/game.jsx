import Turnsee from "./sideturncheck"
import Grid from "./grid"

 function game({playerdata,setplayerdata,turn,changeturn}){
        return(
            <>
            <main>
                <section className="maingame">
                  <Grid 
                    playerdata={playerdata}
                    setplayerdata={setplayerdata()}
                    changeturn={changeturn}
                    turn={turn}
                  />
                </section>
                <section className="turndisplay">
                  <Turnsee 
                    playerdata={playerdata}
                    setplayerdata={setplayerdata()}
                    turn={turn}
                    
                  />
                </section>
            </main>
            </>
        )}