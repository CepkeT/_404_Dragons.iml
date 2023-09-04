function RoadMove(Road)
{
    let buffRoad= [];

    for(let i=0;i<16;++i){
        if (i === 15) {
            buffRoad.push(Math.floor(Math.random() * 1200))
        }
        buffRoad.push(Road[i+1]);
    }
    return buffRoad;
}

export default RoadMove;