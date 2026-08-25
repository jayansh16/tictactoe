import { useState } from "react"

const box=[1,2,3,4,5,6,7,8,9];
function grid({playerdata,setplayerdata}){
    const [boxstate,setboxstate]=useState("nuetral")
    function handlebox(n){
        const owned= playerdata.flatMap(obj => obj.ownedboxes);
        if (n in owned){
            alert("pick an empty box")
            return
        }
        else{
        }

    }
  return(
    box.map((n)=>
    <div className="gridbox" id={n}>
        <button id={n}>
            <img src="" alt="box" />
        </button>
    </div>
    )
  )
}
export default grid