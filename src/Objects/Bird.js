import {useRef} from "react";
import  {useState} from "react";
//Style
import '../Styles/style.css';
function Bird({GetTdAction, time}){
    const animationArr = [
        "/Images/Bird/Bird_1.png",
        "/Images/Bird/Bird_2.png",
        "/Images/Bird/Bird_3.png",
        "/Images/Bird/Bird_4.png",
        "/Images/Bird/Bird_5.png",
        "/Images/Bird/Bird_6.png",
        "/Images/Bird/Bird_7.png",
        "/Images/Bird/Bird_8.png",
        "/Images/Bird/Bird_9.png",
        "/Images/Bird/Bird_10.png",
    ]

    const [currentFrameSource, setCurrentFrameSource] = useState(0);

    const [url, setUrl] = useState(animationArr[currentFrameSource])

    const birdRef = useRef(null)

    setTimeout(() => {
        let animIndex = currentFrameSource + 1;
        if(animIndex === animationArr.length){
            animIndex = 0;
        }
        setCurrentFrameSource(animIndex)
        setUrl(animationArr[animIndex])


    }, 100)

    /*setTimeout(()=>{
        if (birdRef.current != null) {
            console.log(birdRef.current.offsetWidth)
        }
    }, 500);*/

    function getTdSizeAction(){
        return birdRef.current == null ? null : birdRef.current.offsetWidth;
    }

    if(GetTdAction!==undefined){
        setTimeout(()=>{
            GetTdAction(getTdSizeAction);
        }, time)
    }

    return (
        <td ref={birdRef}>
            <img id={"bird"} src={url}></img>
        </td>
    )
}

export default Bird;