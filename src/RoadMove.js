function RoadMove(Road) {
    return Road.map((item, index) => {
        if (index == Road.length - 1) {
            return Math.floor(Math.random() * 100);
        }
        return Road[index + 1];
    });
}

export default RoadMove;