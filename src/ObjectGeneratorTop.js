import React from "react";
import Bird from "./Bird";
import Empty from "./Empty";

function ObjectGeneratorTop({getDivAction, time, objectIndex}) {
    if (objectIndex >= 1800 && objectIndex <= 2000) {
        return <Bird GetDivAction={getDivAction} time={time}></Bird>
    }
    else{
        return <Empty GetDivAction={getDivAction} time={time}></Empty>
    }
}

export default ObjectGeneratorTop;