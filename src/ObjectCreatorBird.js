import React, { useEffect, useRef } from "react";
import Bird from "./Bird";
import Empty from "./Empty";

function ObjectGeneratorTop({getDivSizeAction,road}){
    let result = [];

    road.forEach((roadValue,index)=>{
        if(index==0){
            switch (roadValue){
                case 2:
                    result.push(<Bird getDivSizeAction={getDivSizeAction}
                                     key={`Bird_${index}`}></Bird>)
                    break;
                default:
                    result.push(<Empty getDivSizeAction={getDivSizeAction}
                                       key={`Empty_${index}`}></Empty>)
            }
        }else {
            switch (roadValue){
                case 2:
                    result.push(<Bird key={`Bird_${index}`}></Bird>)
                    break;
                default:
                    result.push(<Empty key={`Empty_${index}`}></Empty>)
            }
        }
    })
    return result;
}

export default ObjectGeneratorTop;