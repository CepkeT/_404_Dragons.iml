import {useCallback, useEffect, useState,useRef} from "react";

function Hero() {
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

    const heroRef = useRef(null);

    useEffect(() => {
        const heroElement = heroRef.current;
        if (heroElement) {
            const width = heroElement.offsetWidth;
            console.log("Размер hero:", width);
        }
    }, []);

    return (
        <div ref={heroRef}>
            <img src={url} style={{ width: "100%", height: "100%" }} />
        </div>
    );
}
export default Hero;