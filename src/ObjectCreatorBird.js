import Bird from "./Bird";
import {useState} from "react";
import Empty from "./Empty";


function ObjectCreatorBird({objectIndex}) {
    if (objectIndex >= 301 && objectIndex <= 1199) {
        return <Empty/>
    }

    if (objectIndex >= 2 && objectIndex <= 300) {
        return <Bird/>
    }
}

export default ObjectCreatorBird;