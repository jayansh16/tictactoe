const box=[1,2,3,4,5,6,7,8,9]
function grid({src,alt}){
  return(
    box.map((n)=>
    <div className="gridbox" id={n}>
      <img src="src" alt="alt" />
    </div>
    )
  )
}
export default grid