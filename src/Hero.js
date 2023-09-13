import {useCallback, useEffect, useState,useRef} from "react";

function Hero({heroOffsetSetterAction}) {
    const animation = [
        "/Icons/Hero/Hero_10.png",
        "/Icons/Hero/Hero_9.png",
        "/Icons/Hero/Hero_8.png",
        "/Icons/Hero/Hero_7.png",
        "/Icons/Hero/Hero_6.png",
        "/Icons/Hero/Hero_5.png",
        "/Icons/Hero/Hero_4.png",
        "/Icons/Hero/Hero_3.png",
        "/Icons/Hero/Hero_2.png",
        "/Icons/Hero/Hero_1.png"
    ];

    const [currentSourceImage, setCurrentSourceImage] = useState(0);
    const [url, setUrl] = useState(animation[currentSourceImage]);
    const [previousTime, setPreviousTime] = useState(0);

    const animateHero = useCallback(() => {
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
            if (time - previousTime >= 50) {
                animateHero();
                setPreviousTime(time);
            }
            animationFrameId = requestAnimationFrame(animateTime);
        };

        animationFrameId = requestAnimationFrame(animateTime);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [previousTime, animateHero]);

    const divRef = useRef(null);

    function div_OnLoad(){
        heroOffsetSetterAction(setHeroOffset);
    }

    function setHeroOffset(offset){
        if (divRef.current == null){
            return;
        }

        divRef.current.style.left = `${offset}px`;
    }

    return (
        <div rowSpan={2} className="Hero" ref={divRef} onLoad={div_OnLoad}>
            <img src={url}  />
        </div>
    );
}
export default Hero;