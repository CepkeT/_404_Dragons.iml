function RoadMove(Road) {
    const shiftedRoad = Array.isArray(Road) ? [...Road] : [];
    const firstItem = shiftedRoad.shift();
    shiftedRoad.push(firstItem);
    return shiftedRoad;
}

export default RoadMove;