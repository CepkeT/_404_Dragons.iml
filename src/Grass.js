import React, {useEffect,useRef} from "react";

function Grass({getDivSizeAction}){
    const div = useRef(null);
    function GetDivSizeAction(){
        return div.current == null ? null: div.current.offsetWidth;
    }
    useEffect(()=>{
        if (getDivSizeAction != undefined){
            getDivSizeAction(GetDivSizeAction);
        }
    })
    return <div ref={div} style={{ width: "100%", height: "100%" }}>
        <img  id={"Grass"} src="/Icons/Landscape/grass.png" style={{ width: "100%", height: "100%" }}/>
    </div>;
}
export default Grass;


