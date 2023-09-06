import {useCallback, useEffect, useState, useRef} from "react";

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

    const [currentSourceImage, setCurrentSourceImage] = useState(0);
    const [url, setUrl] = useState(animation[currentSourceImage]);
    const [previousTime, setPreviousTime] = useState(0);

    const animateBird = useCallback(() => {
        let animationIndex = currentSourceImage + 1;
        if (animationIndex === animation.length) {
            animationIndex = 0;
        }
        setCurrentSourceImage(animationIndex);
        setUrl(animation[currentSourceImage]);
    }, [animation, currentSourceImage]);

    useEffect(() => {
        let animationFrameId;

        const animateTime = (time) => {
            if (time - previousTime >= 25) {
                animateBird();
                setPreviousTime(time);
            }
            animationFrameId = requestAnimationFrame(animateTime);
        };
        animationFrameId = requestAnimationFrame(animateTime);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [previousTime, animateBird]);


    return (
        <div>
            <img id="bird" src={url} />
        </div>
    );
}
export default Bird;