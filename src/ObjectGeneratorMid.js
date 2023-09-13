import Hero from "./Hero";
import Tree_1 from "./Tree_1";
import Bird from "./Bird";
import Empty from "./Empty";

function ObjectGeneratorMid({road, heroOffsetSetterAction}){
    let result = [];

    road.forEach((roadValue, index) => {
        switch (roadValue){
            case -1:
                result.push(<Hero key={`Hero_${index}`}
                                  heroOffsetSetterAction=
                                      {heroOffsetSetterAction}></Hero>)
                break;
            default:
                result.push(<Empty key={`Empty_${index}`}></Empty>)
        }
    })

    return result
}
export default ObjectGeneratorMid;