import {useState} from "react";
import Empty from "./Empty";
import Tree_1 from "./Tree_1";
import Tree_2 from "./Tree_2";

function ObjectCreator({objectIndex}) {
    if (objectIndex >= 301 && objectIndex <= 1199) {
        return <Empty/>
    }
    if (objectIndex >= 101 && objectIndex <= 300) {
        return <Tree_1/>
    }
    if (objectIndex >= 2 && objectIndex <= 100) {
        return <Tree_2/>
    }
}

export default ObjectCreator;
