function showend(turngame){
    function handlerestart(){
        const placeholder="to restart game"
        turngame(false)
    }
    return(
        <div className="endbox">
            <h1>winner</h1>
            <img src="" alt="" />
            <h3>{player}</h3>
            <button>restart game</button>
        </div>
    )
}