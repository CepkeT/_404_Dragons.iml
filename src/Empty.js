import React, {useEffect,useRef} from "react";

function Empty({getDivSizeAction}){
    const div = useRef(null);
    function GetDivSizeAction(){
        return div.current == null ? null: div.current.offsetWidth;
    }
    useEffect(()=>{
        if (getDivSizeAction != undefined){
            getDivSizeAction(GetDivSizeAction);
        }
    })
    return <div ref={div} style={{ width: "100%", height: "100%" }}><div/></div>;
}
export default Empty;