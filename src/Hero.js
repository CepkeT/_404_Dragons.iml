import {useState} from "react";

function Hero() {

    const animation =[
        "/Icons/Hero/Hero_10.png",
        "/Icons/Hero/Hero_9.png",
        "/Icons/Hero/Hero_8.png",
        "/Icons/Hero/Hero_7.png",
        "/Icons/Hero/Hero_6.png",
        "/Icons/Hero/Hero_5.png",
        "/Icons/Hero/Hero_4.png",
        "/Icons/Hero/Hero_3.png",
        "/Icons/Hero/Hero_2.png",
        "/Icons/Hero/Hero_1.png"]

    const [currentSourseImage, setCurrentSourseImage] = useState(0)
    const [url, setUrl] = useState(animation[currentSourseImage])

    setTimeout(() => {
       let animationIndex = currentSourseImage + 1;
        if(animationIndex === animation.length){
            animationIndex = 0;
        }
        setCurrentSourseImage(animationIndex)
        setUrl(animation[currentSourseImage])
    }, 100)

    return (
        <div>
            <img src ={url} style={{ width: "100%", height: "100%" }}/>
        </div>
    )

}
export default Hero