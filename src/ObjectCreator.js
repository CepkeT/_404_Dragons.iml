import React, { useEffect, useRef, forwardRef } from "react";
import Empty from "./Empty";
import Tree_1 from "./Tree_1";
import Tree_2 from "./Tree_2";

function ObjectGeneratorBottom({road}){
    let result = [];

    road.forEach((roadValue,index)=>{
        switch (roadValue){
            case -1:
                break;
            case 1:
                result.push(<Tree_1 key={`Tree_${index}`}></Tree_1>)
                break;
            default:
                result.push(<Empty key={`Empty_${index}`}></Empty>)
        }
    })
    return result;
}
/*const ObjectCreator = forwardRef(({ objectIndex }, ref) => {
    const objectCreatorRef = useRef(null);

    useEffect(() => {
        const measureWidth = () => {
            const objectCreatorElement = objectCreatorRef.current;
            if (objectCreatorElement) {
                const { width } = objectCreatorElement.getBoundingClientRect();
                console.log("Размер objectCreator:", width);
            }
        };

        const timeoutId = setTimeout(measureWidth, 0);

        return () => clearTimeout(timeoutId);
    }, []);

    if (objectIndex >= 10 && objectIndex <= 99) {
        return <Empty ref={objectCreatorRef} />;
    } else if (objectIndex >= 4 && objectIndex <= 9) {
        return <Tree_1 ref={objectCreatorRef} />;
    } else if (objectIndex >= 0 && objectIndex <= 3) {
        return <Tree_2 ref={objectCreatorRef} />;
    } else {
        return null;
    }
});*/

export default ObjectGeneratorBottom;