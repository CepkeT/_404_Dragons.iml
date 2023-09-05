import Bird from "./Bird";
import Empty from "./Empty";

function ObjectCreatorBird({ objectIndex }) {
    if (objectIndex >= 0 && objectIndex <= 94) {
        return <Empty />;
    } else if (objectIndex >= 95 && objectIndex <= 99) {
        return <Bird />;
    } else {
        return null;
    }
}

export default ObjectCreatorBird;