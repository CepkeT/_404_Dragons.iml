import Empty from "../Objects/Empty";
import Tree from "../Objects/Tree";
import Sponge from "../Objects/SpongeBob";

function TreeCreator({getTdAction, time, objectIndex}) {
    if (objectIndex === 1444) {
        return <Sponge GetTdAction={getTdAction} time={time}></Sponge>
    }
    if (objectIndex >= 1400 && objectIndex <= 1500) {
        return <Tree GetTdAction={getTdAction} time={time}></Tree>
    } else {
        return <Empty GetTdAction={getTdAction} time={time}></Empty>
    }
}

export default TreeCreator