import Grass from "./Grass";

function ObjectCreatorGrass({ objectIndex }) {
    if (objectIndex >= 0 && objectIndex <= 99) {
        return <Grass />;
    } else {
        return null;
    }
}

export default ObjectCreatorGrass;