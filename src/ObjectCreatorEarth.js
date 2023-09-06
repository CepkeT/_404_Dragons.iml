import React, { useEffect, useRef } from "react";
import Earth from "./Earth";

const ObjectCreatorEarth = React.forwardRef(({ objectIndex }, ref) => {
        const objectCreatorEarthRef = useRef(ref);

        useEffect(() => {
                if (objectCreatorEarthRef.current && objectCreatorEarthRef.current instanceof Element) {
                        const { width, height } = objectCreatorEarthRef.current.getBoundingClientRect();
                        console.log("Размер ObjectCreatorBird:", width, height);
                }
        }, []);

        if (objectIndex >= 0 && objectIndex <= 99) {
                return <Earth ref={objectCreatorEarthRef} />;
        } else {
                return null;
        }
});

export default ObjectCreatorEarth;