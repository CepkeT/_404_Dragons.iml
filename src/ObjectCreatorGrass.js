import React, { useEffect, useRef } from "react";
import Grass from "./Grass";

const ObjectCreatorGrass = React.forwardRef(({ objectIndex }, ref) => {
    const ObjectCreatorGrassRef = useRef(ref);
    useEffect(() => {
        if (ObjectCreatorGrassRef.current && ObjectCreatorGrassRef.current instanceof Element) {
            const { width, height } = ObjectCreatorGrassRef.current.getBoundingClientRect();
            console.log("Размер ObjectCreatorBird:", width, height);
        }
    }, []);

    if (objectIndex >= 0 && objectIndex <= 99) {
        return <Grass ref={ObjectCreatorGrassRef} />;
    } else {
        return null;
    }
});

export default ObjectCreatorGrass;