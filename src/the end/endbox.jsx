function Showend({handlerestart,wondata}) {
  if (wondata==="no winner"){
    return(
      <div className="drawendbox">
        <h1>draw</h1>
        <button onClick={()=>handlerestart}>restart game</button>
    </div>
    )
  }
  else{return (
    <div className="endbox">
      <h1>winner {}</h1>
      <img src="" alt="" />
      <h3>{}</h3>
      <button onClick={()=>handlerestart}>restart game</button>
    </div>
  );}
}

export default Showend;
