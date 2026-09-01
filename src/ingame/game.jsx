import Turnsee from "./sideturncheck";
import Grid from "./grid";

function Game({returnturnitems,box,handlebox}) {
  return (
    <>
      <main>
        <section className="maingame">
          <Grid
            box={box}
            handlebox={handlebox}
          />
        </section>
        <section className="turndisplay">
          <Turnsee
            returnturnitems={returnturnitems}
          />
        </section>
      </main>
    </>
  );
}
export default Game;
