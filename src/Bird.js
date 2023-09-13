import React, {useCallback, useEffect, useRef, useState} from "react";

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

function Bird({getDivSizeAction}) {
    const div = useRef(null);

    function GetDivSizeAction(){
        return div.current == null ? null: div.current.offsetWidth;
    }
    useEffect(()=>{
        if (getDivSizeAction != undefined){
            getDivSizeAction(GetDivSizeAction);
        }
    })
    const [currentSourceImage, setCurrentSourceImage] = useState(0);

    const animateBird = useCallback(() => {
        setCurrentSourceImage((prevSourceImage) => {
            let animationIndex = prevSourceImage + 1;
            if (animationIndex === animation.length) {
                animationIndex = 0;
            }
            return animationIndex;
        });
    }, []);

    useEffect(() => {
        let animationFrameId;
        let previousTime = 0;

        const animateTime = (time) => {
            if (time - previousTime >= 25) {
                animateBird();
                previousTime = time;
            }
            animationFrameId = requestAnimationFrame(animateTime);
        };

        animationFrameId = requestAnimationFrame(animateTime);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [animateBird]);

    const url = animation[currentSourceImage];

    return (
        <div ref={div} className="bird">
            <img src={url} />
        </div>
    );
}

export default Bird;