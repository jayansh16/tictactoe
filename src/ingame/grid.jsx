function Grid({box,handlebox,fillboxes}) {
  
  return box.map((n) => (
    <div className="gridbox" id={n}>
      <button id={n} onClick={()=>handlebox(n)}>
        {!(fillboxes===null) && <img className= "boximage" src={fillboxes.src} alt={fillboxes.alt} />}
      </button>
    </div>
  ));
}
export default Grid;
