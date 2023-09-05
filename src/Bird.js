import {useState} from "react";

function Bird() {
    const animation = [
        "/Icons/Bird/Bird_1.png",
        "/Icons/Bird/Bird_2.png",
        "/Icons/Bird/Bird_3.png",
        "/Icons/Bird/Bird_4.png",
        "/Icons/Bird/Bird_5.png",
        "/Icons/Bird/Bird_6.png",
        "/Icons/Bird/Bird_7.png",
        "/Icons/Bird/Bird_7.png",
        "/Icons/Bird/Bird_8.png",
        "/Icons/Bird/Bird_9.png",
        "/Icons/Bird/Bird_10.png"
    ];
    const [currentSourseImage, setCurrentSourseImage] = useState(0);
    const [url, setUrl] = useState(animation[currentSourseImage]);

    setTimeout(() => {
        let animationIndex = currentSourseImage + 1;
        if(animationIndex === animation.length){
            animationIndex = 0;
        }
        setCurrentSourseImage(animationIndex)
        setUrl(animation[currentSourseImage])
    }, 25)

    return (
        <div>
            <img id={"bird"} src ={url}/>
        </div>
    )

}
export default Bird;