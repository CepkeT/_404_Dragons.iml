import React from "react";
import Tree_1 from "./Tree_1";
import Tree_2 from "./Tree_2";
import Hero from "./Hero";
import Empty from "./Empty";

function ObjectGeneratorBottom({ road,heroOffsetSetterAction }) {
    let result = [];

    road.forEach((roadValue, index) => {
        switch (roadValue) {
            case -1:
                result.push(<Hero key={`Hero_${index}`}
                                  heroOffsetSetterAction=
                                      {heroOffsetSetterAction} />);
                break;
            case 1:
                result.push(<Tree_1 key={`Tree_${index}`} />);
                break;
            case 2:
                result.push(<Tree_2 key={`Tree_${index}`} />);
                break;
            default:
                result.push(<Empty key={`Empty_${index}`} />);
        }
    });

    return result;
}

export default ObjectGeneratorBottom;
