//Style
import '../Styles/style.css';
import {useRef} from "react";

function Empty({GetTdAction, time}){
    const emptyRef = useRef(null)

    function getTdSizeAction(){
        return emptyRef.current == null ? null : emptyRef.current.offsetWidth;
    }

    if(GetTdAction!==undefined){
        setTimeout(()=>{
            GetTdAction(getTdSizeAction);
        }, time)
    }

    return (
        <td ref={emptyRef}></td>
    )
}

export default Empty