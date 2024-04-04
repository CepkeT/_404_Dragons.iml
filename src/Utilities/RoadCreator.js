class RoadCreator{
    roadArr = [];
    constructor() {
        this.roadArr = [];
        for (let i=0;i<26;++i){
            this.roadArr.push(Generator().next().value)
        }
        //console.log("Road array from constructor: "+this.roadArr);
    }

    RoadMoveLogic(Road) {
        //console.log(`Road Array from class: ${Road}`);

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

export default new RoadCreator();