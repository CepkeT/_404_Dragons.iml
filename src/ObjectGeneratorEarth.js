import React, { useEffect, useRef } from "react";
import Earth from "./Earth";

function ObjectGeneratorEarth ({road}){
        let result=[];
        road.forEach((roadValue,index)=>{
               switch (roadValue){
                       default:result.push(<Earth key={`Earth_${index}`}></Earth>)
               }
        })
        return result;
}
export default ObjectGeneratorEarth;


