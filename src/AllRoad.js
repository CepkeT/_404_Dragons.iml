import React, { useEffect, useState } from "react";
import ObjectCreator from "./ObjectCreator";
import Hero from "./Hero";
import Earth from "./Earth";
import Grass from "./Grass";
import RoadCreator from "./RoadCreator";

function AllRoad() {
    const [road, setRoad] = useState(RoadCreator.getContent());

    useEffect(() => {
        const interval = setTimeout(() => {
            RoadCreator.shiftRoad();
            setRoad(RoadCreator.getContent());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="GameField">
            <table>
                <Hero />
                <Grass />
                <Grass />
                <Grass />
                {road.map((objectIndex, index) => (
                    <ObjectCreator key={index} objectIndex={objectIndex} />
                ))}
                <Earth />
            </table>
        </div>
    );
}

export default AllRoad;