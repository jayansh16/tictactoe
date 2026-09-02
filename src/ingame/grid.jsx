function Grid({box,handlebox,fillboxes}) {
  
  return box.map((n) => (
    <div className="gridbox" id={n.id}>
      <button id={n.id} onClick={()=>handlebox(n.id)}>
      
        {!(fillboxes(n.id)===null) && <img className= "boximage" src={fillboxes(n.id).src} alt={fillboxes(n.id).alt} />}
      </button>
    </div>
  ));
}
export default Grid;
