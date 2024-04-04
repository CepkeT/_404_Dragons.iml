import {useRef} from "react";
//Style
import '../Styles/style.css';

function Sponge({GetTdAction, time}){

    const spongeRef = useRef(null)

    /*setTimeout(()=>{
        if(cactusRef.current != null){
            console.log(cactusRef.current.offsetWidth)
        }
    }, 500)*/

    function getTdSizeAction(){
        return spongeRef.current == null ? null : spongeRef.current.offsetWidth;
    }

    if(GetTdAction!==undefined){
        setTimeout(()=>{
            GetTdAction(getTdSizeAction);
        }, time)
    }

    return (
        <td ref={spongeRef}>
            <img id={"cactus"} src={"Images/Sponge.gif"}></img>
        </td>
    )
}

export default Sponge;