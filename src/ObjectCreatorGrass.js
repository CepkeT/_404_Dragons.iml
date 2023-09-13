import React, { useEffect, useRef } from "react";
import Grass from "./Grass";

function ObjectGeneratorGrass ({road}){
    let result=[];
    road.forEach((roadValue,index)=>{
        switch (roadValue){
            default:result.push(<Grass key={`Grass_${index}`}></Grass>)
        }
    })
    return result;
}

export default ObjectGeneratorGrass;

