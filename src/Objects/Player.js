import {useState} from "react";

//Style
import '../Styles/style.css';

function Player({playerRef}) {
    const animationArr = [
        "Images/Hero/Hero_10.png",
        "Images/Hero/Hero_9.png",
        "Images/Hero/Hero_8.png",
        "Images/Hero/Hero_7.png",
        "Images/Hero/Hero_6.png",
        "Images/Hero/Hero_5.png",
        "Images/Hero/Hero_4.png",
        "Images/Hero/Hero_3.png",
        "Images/Hero/Hero_2.png",
        "Images/Hero/Hero_1.png",
    ]
    const [currentFrameSource, setCurrentFrameSource] = useState(0);

    const [url, setUrl] = useState(animationArr[currentFrameSource])

    setTimeout(() => {
        let animIndex = currentFrameSource + 1;
        if (animIndex === animationArr.length) {
            animIndex = 0;
        }
        setCurrentFrameSource(animIndex)
        setUrl(animationArr[animIndex])
    }, 95)

    return (
        <td ref={playerRef} id={"playerTd"}>
            <img id={"player"} src={url}></img>
        </td>
    )
}


export default Player;
