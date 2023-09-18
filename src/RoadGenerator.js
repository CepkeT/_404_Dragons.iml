/*class RoadGenerator {
    roadArr = [];
    constructor() {
        this.roadArr = [];
        for (let i=0;i<26;++i){
            this.roadArr.push(Generator().next().value)
        }
    }

    RoadMoveLogic(Road) {
        Road.shift();
        Road.push(Generator().next().value);
        return [...Road];
    }

    getContent(){
        return this.roadArr;
    }
}

function* Generator() {
    yield Math.floor(Math.random() * 2000);
}

export default  new RoadGenerator;*/
// RoadGenerator.js
class RoadGenerator {
    roadArr = [];

    constructor() {
        this.roadArr = [];
        for (let i = 0; i < 26; ++i) {
            this.roadArr.push(Generator().next().value);
        }
    }

    RoadMoveLogic(Road) {
        Road.shift();
        Road.push(Generator().next().value);
        return [...Road];
    }

    getContent() {
        return this.roadArr;
    }
}

function* Generator() {
    yield Math.floor(Math.random() * 2000);
}

export default RoadGenerator;