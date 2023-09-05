class RoadCreator {
    constructor() {
        this.roadArr = this.generateRoadArr();
    }

    *generateRoadArr() {
        while (true) {
            yield Math.floor(Math.random() * 100);
        }
    }

    getContent() {
        return Array.from({ length: 80 }, () => this.roadArr.next().value);
    }
}

export default new RoadCreator();