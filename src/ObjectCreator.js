import Empty from "./Empty";
import Tree_1 from "./Tree_1";
import Tree_2 from "./Tree_2";

function ObjectCreator({ objectIndex }) {
    if (objectIndex >= 10 && objectIndex <= 99) {
        return <Empty/>;
    } else if (objectIndex >= 4 && objectIndex <= 9) {
        return <Tree_1/>;
    } else if (objectIndex >= 0 && objectIndex <= 3) {
        return <Tree_2/>;
    } else {
        return null;
    }
}


export default ObjectCreator;