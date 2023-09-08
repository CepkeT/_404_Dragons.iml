class RoadCreator {
    constructor() {
        this.roadArr = this.generateRoadArr();
    }

    *generateRoadArr() {
        const roadLength = 80;
        const numbers = Array.from({ length: roadLength }, (_, index) => index);
        let currentIndex = roadLength;

        while (currentIndex > 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [numbers[currentIndex], numbers[randomIndex]] = [
                numbers[randomIndex],
                numbers[currentIndex]
            ];

            yield numbers[currentIndex];
        }
    }

    getContent() {
        return Array.from({ length: 80 }, () => this.roadArr.next().value);
    }
}

export default new RoadCreator();