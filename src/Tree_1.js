import React, {useEffect,useRef} from "react";

function Tree_1({getDivSizeAction}){
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
        <img id={"tree_1"} src="/Icons/Landscape/tree_1.png" style={{ width: "100%", height: "100%" }}/>
    </div>;
}
export default Tree_1;
