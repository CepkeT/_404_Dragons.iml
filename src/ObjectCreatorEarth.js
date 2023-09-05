import Earth from "./Earth";

function ObjectCreatorEarth({ objectIndex }) {
        if (objectIndex >= 0 && objectIndex <= 99) {
                return <Earth />;
        } else {
                return null;
        }
}

export default ObjectCreatorEarth;