import Turnsee from "./sideturncheck"
import Grid from "./grid"

 function game({playerdata,setplayerdata}){
        return(
            <>
            <main>
                <section className="maingame">
                  <Grid 
                    playerdata={playerdata}
                    setplayerdata={setplayerdata()}
                  />
                </section>
                <section className="turndisplay">
                  <Turnsee 
                    playerdata={playerdata}
                    setplayerdata={setplayerdata()}
                  />
                </section>
            </main>
            </>
        )}