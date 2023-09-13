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
    return <div ref={div} className="Empty"></div>;
}
export default Empty;