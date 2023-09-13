import React, { useEffect, useRef } from "react";
import Bird from "./Bird";
import Empty from "./Empty";

const ObjectCreatorBird = React.forwardRef(({ objectIndex }, ref) => {
    const objectCreatorBirdRef = useRef(ref);
    useEffect(() => {
        if (objectCreatorBirdRef.current && objectCreatorBirdRef.current instanceof Element) {
            const { width, height } = objectCreatorBirdRef.current.getBoundingClientRect();
            console.log("Размер ObjectCreatorBird:", width, height);
        }
    }, []);

    if (objectIndex >= 0 && objectIndex <= 94) {
        return <Empty ref={objectCreatorBirdRef} />;
    } else if (objectIndex >= 95 && objectIndex <= 99) {
        return <Bird ref={objectCreatorBirdRef} />;
    } else {
        return null;
    }
});

export default ObjectCreatorBird;