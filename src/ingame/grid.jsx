function Grid({box,handlebox}) {
  
  return box.map((n) => (
    <div className="gridbox" id={n}>
      <button id={n} onClick={()=>handlebox(n)}>
        <img src={} alt= />
      </button>
    </div>
  ));
}
export default Grid;
