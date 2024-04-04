import {useRef} from "react";
//Style
import '../Styles/style.css';

function Tree({GetTdAction, time}){

    const treeRef = useRef(null)

    /*setTimeout(()=>{
        if(treeRef.current != null){
            console.log(treeRef.current.offsetWidth)
        }
    }, 500)*/

    function getTdSizeAction(){
        return treeRef.current == null ? null : treeRef.current.offsetWidth;
    }

    if(GetTdAction!==undefined){
        setTimeout(()=>{
            GetTdAction(getTdSizeAction);
        }, time)
    }

    return (
        <td ref={treeRef}>
            <img id={"tree"} src={"/Images/Landscape/tree_1.png"}></img>
        </td>
    )
}

export default Tree