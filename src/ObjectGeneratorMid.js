import Tree_1 from "./Tree_1";
import Empty from "./Empty";

function ObjectGeneratorMid({getDivAction, time, objectIndex}){

    if (objectIndex >= 1400 && objectIndex <= 1500) {
        return <Tree_1 GetDivAction={getDivAction} time={time}/>
    } else {
        return <Empty GetDivAction={getDivAction} time={time}/>
    }
}
export default ObjectGeneratorMid;