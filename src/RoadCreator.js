class RoadCreator {
    constructor() {
        this.roadArr = [];
        for (let i = 0; i < 11; ++i) {
            this.roadArr[i] = Math.floor(Math.random() * 2);
        }
    }

    getContent() {
        return this.roadArr;
    }

    shiftRoad() {
        this.roadArr.push(Math.floor(Math.random() * 2));
        this.roadArr.shift();
    }
}

export default new RoadCreator();