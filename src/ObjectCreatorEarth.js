import Earth from "./Earth";
import {useState} from "react";

function ObjectCreatorEarth({objectIndex}) {
    if (objectIndex === 1) {
        return <Earth/>
    }
    return <Earth/>
}

export default ObjectCreatorEarth;