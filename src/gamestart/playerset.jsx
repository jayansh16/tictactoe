function playerchoose(){
    const player=[
        {
        symbol:"cross",
        img: "",
        playername:"player 1",
        ownedboxes:[]
        },
        {
        symbol:"zero",
        img: "",
        playername:"player 2",
        ownedboxes:[]
        }
    ]

    return(
    <div className="choose">
        <div className="options">
            <img src="" alt="cross" />
            <label htmlFor="cross-name">
                <input type="text" className="chooseinput" defaultValue="player1" />
            </label>
        </div>
        <div className="options">
            <img src="" alt="cross" />
            <label htmlFor="cross-name">
                <input type="text" className="chooseinput" defaultValue="player2" />
            </label>
        </div>
    </div>
    )
}