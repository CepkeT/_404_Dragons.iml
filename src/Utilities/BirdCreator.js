import Empty from "../Objects/Empty";
import Bird from "../Objects/Bird";

function BirdCreator({getTdAction, time, objectIndex}) {
    if (objectIndex >= 1800 && objectIndex <= 2000) {
        return <Bird GetTdAction={getTdAction} time={time}></Bird>
    }
    else{
        return <Empty GetTdAction={getTdAction} time={time}></Empty>
    }
}

export default BirdCreator