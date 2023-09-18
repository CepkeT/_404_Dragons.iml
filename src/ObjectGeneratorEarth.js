import Earth from "./Grass";
import React from "react";

function ObjectGeneratorEarth ({ objectIndex}){
    if (objectIndex >= 1400 && objectIndex <= 1500) {
        return <Earth />
    } else {
        return <Earth />
    }
}
export default ObjectGeneratorEarth;