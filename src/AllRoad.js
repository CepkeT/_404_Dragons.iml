import React, { useEffect, useState } from "react";
import ObjectCreator from "./ObjectCreator";
import Hero from "./Hero";
import RoadMove from "./RoadMove";
import ObjectCreatorEarth from "./ObjectCreatorEarth";
import ObjectCreatorGrass from "./ObjectCreatorGrass";
import ObjectCreatorBird from "./ObjectCreatorBird";



function AllRoad({Road}) {
    const [road, setRoad] = useState(Road);
    const interval = setTimeout(args => {
        setRoad(roadMove(road));
        console.log(road);
        }, 500);



    return (
        <div id="GameField">
            <table>
                <tbody>
                <tr>
                    <ObjectCreatorBird objectIndex={road[0]}/>
                    <ObjectCreatorBird objectIndex={road[1]}/>
                    <ObjectCreatorBird objectIndex={road[2]}/>
                    <ObjectCreatorBird objectIndex={road[3]}/>
                    <ObjectCreatorBird objectIndex={road[4]}/>
                    <ObjectCreatorBird objectIndex={road[5]}/>
                    <ObjectCreatorBird objectIndex={road[6]}/>
                    <ObjectCreatorBird objectIndex={road[7]}/>
                    <ObjectCreatorBird objectIndex={road[8]}/>
                    <ObjectCreatorBird objectIndex={road[9]}/>
                    <ObjectCreatorBird objectIndex={road[10]}/>
                    <ObjectCreatorBird objectIndex={road[11]}/>
                    <ObjectCreatorBird objectIndex={road[12]}/>
                    <ObjectCreatorBird objectIndex={road[13]}/>
                    <ObjectCreatorBird objectIndex={road[14]}/>
                    <ObjectCreatorBird objectIndex={road[15]}/>
                    <ObjectCreatorBird objectIndex={road[16]}/>
                </tr>

                <tr>
                    <ObjectCreator objectIndex={road[0]}/>
                    <ObjectCreator objectIndex={road[1]}/>
                    <ObjectCreator objectIndex={road[2]}/>
                    <Hero/>
                    <ObjectCreator objectIndex={road[3]}/>
                    <ObjectCreator objectIndex={road[4]}/>
                    <ObjectCreator objectIndex={road[5]}/>
                    <ObjectCreator objectIndex={road[6]}/>
                    <ObjectCreator objectIndex={road[7]}/>
                    <ObjectCreator objectIndex={road[8]}/>
                    <ObjectCreator objectIndex={road[9]}/>
                    <ObjectCreator objectIndex={road[10]}/>
                    <ObjectCreator objectIndex={road[11]}/>
                    <ObjectCreator objectIndex={road[12]}/>
                    <ObjectCreator objectIndex={road[13]}/>
                    <ObjectCreator objectIndex={road[14]}/>
                    <ObjectCreator objectIndex={road[15]}/>
                </tr>

                <tr>
                    <ObjectCreatorGrass objectIndex={road[0]}/>
                    <ObjectCreatorGrass objectIndex={road[1]}/>
                    <ObjectCreatorGrass objectIndex={road[2]}/>
                    <ObjectCreatorGrass objectIndex={road[3]}/>
                    <ObjectCreatorGrass objectIndex={road[4]}/>
                    <ObjectCreatorGrass objectIndex={road[5]}/>
                    <ObjectCreatorGrass objectIndex={road[6]}/>
                    <ObjectCreatorGrass objectIndex={road[7]}/>
                    <ObjectCreatorGrass objectIndex={road[8]}/>
                    <ObjectCreatorGrass objectIndex={road[9]}/>
                    <ObjectCreatorGrass objectIndex={road[10]}/>
                    <ObjectCreatorGrass objectIndex={road[11]}/>
                    <ObjectCreatorGrass objectIndex={road[12]}/>
                    <ObjectCreatorGrass objectIndex={road[13]}/>
                    <ObjectCreatorGrass objectIndex={road[14]}/>
                    <ObjectCreatorGrass objectIndex={road[15]}/>
                    <ObjectCreatorGrass objectIndex={road[16]}/>
                </tr>

                <tr>
                    <ObjectCreatorEarth objectIndex={road[0]}/>
                    <ObjectCreatorEarth objectIndex={road[1]}/>
                    <ObjectCreatorEarth objectIndex={road[2]}/>
                    <ObjectCreatorEarth objectIndex={road[3]}/>
                    <ObjectCreatorEarth objectIndex={road[4]}/>
                    <ObjectCreatorEarth objectIndex={road[5]}/>
                    <ObjectCreatorEarth objectIndex={road[6]}/>
                    <ObjectCreatorEarth objectIndex={road[7]}/>
                    <ObjectCreatorEarth objectIndex={road[8]}/>
                    <ObjectCreatorEarth objectIndex={road[9]}/>
                    <ObjectCreatorEarth objectIndex={road[10]}/>
                    <ObjectCreatorEarth objectIndex={road[11]}/>
                    <ObjectCreatorEarth objectIndex={road[12]}/>
                    <ObjectCreatorEarth objectIndex={road[13]}/>
                    <ObjectCreatorEarth objectIndex={road[14]}/>
                    <ObjectCreatorEarth objectIndex={road[15]}/>
                    <ObjectCreatorEarth objectIndex={road[16]}/>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AllRoad;