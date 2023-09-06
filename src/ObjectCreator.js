import React, { useEffect, useRef } from "react";
import Empty from "./Empty";
import Tree_1 from "./Tree_1";
import Tree_2 from "./Tree_2";

const ObjectCreator = React.forwardRef(({ objectIndex }, ref) => {

    const objectCreatorRef = useRef(ref);

    useEffect(() => {
        if (objectCreatorRef.current && objectCreatorRef.current instanceof Element) {
            const { width, height } = objectCreatorRef.current.getBoundingClientRect();
            console.log("Размер ObjectCreatorBird:", width, height);
        }
    }, []);

    if (objectIndex >= 10 && objectIndex <= 99) {
        return <Empty />;
    } else if (objectIndex >= 4 && objectIndex <= 9) {
        return <Tree_1 ref={objectCreatorRef} />;
    } else if (objectIndex >= 0 && objectIndex <= 3) {
        return <Tree_2 ref={objectCreatorRef} />;
    } else {
        return null;
    }
});

export default ObjectCreator;