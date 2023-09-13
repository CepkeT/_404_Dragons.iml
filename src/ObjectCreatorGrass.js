import React, { useEffect, useRef } from "react";
import Grass from "./Grass";

function ObjectGeneratorGrass ({getDivSizeAction,road}){
    let result=[];
    road.forEach((roadValue,index)=>{
        switch (roadValue){
            default:result.push(<Grass key={`Grass_${index}`}></Grass>)
        }
    })
    return result;
}
/*const ObjectCreatorGrass = React.forwardRef(({ objectIndex }, ref) => {
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
});*/

export default ObjectGeneratorGrass;