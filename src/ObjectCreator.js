import Empty from "./Empty";
import Bird from "./Bird";
import Tree_1 from "./Tree_1";
import Tree_2 from "./Tree_2";
import Earth from "./Earth";
import Grass from "./Grass";

function ObjectCreator({objectIndex}) {
    if (objectIndex == 0) {
        return <Empty></Empty>
    }
    if (objectIndex == 1) {
        return <Bird></Bird>
    }
    if (objectIndex == 2) {
        return <Tree_1></Tree_1>
    }
    if (objectIndex == 3) {
        return <Tree_2></Tree_2>
    }
    if (objectIndex == 4) {
        return <Earth></Earth>
    }
    if (objectIndex == 5) {
        return <Grass></Grass>
    }

}

export default ObjectCreator