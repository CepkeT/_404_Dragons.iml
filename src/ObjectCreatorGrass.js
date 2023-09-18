import React from "react";
import Grass from "./Grass";


function ObjectGeneratorGrass ({ objectIndex}){
    if (objectIndex >= 1400 && objectIndex <= 1500) {
        return <Grass  />
    } else {
        return <Grass  />
    }
}

export default ObjectGeneratorGrass;

