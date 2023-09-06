import React, { useEffect, useState, useCallback, useRef } from "react";
import ObjectCreator from "./ObjectCreator";
import Hero from "./Hero";
import ObjectCreatorEarth from "./ObjectCreatorEarth";
import ObjectCreatorGrass from "./ObjectCreatorGrass";
import ObjectCreatorBird from "./ObjectCreatorBird";
import "./style/AllRoad.css";
import RoadMove from "./RoadMove";

const ObjectCreatorBirdMemo = React.memo(ObjectCreatorBird);
const HeroMemo = React.memo(Hero);
const ObjectCreatorGrassMemo = React.memo(ObjectCreatorGrass);
const ObjectCreatorEarthMemo = React.memo(ObjectCreatorEarth);

function AllRoad({ Road }) {
  const [road, setRoad] = useState(Road);

  const animateRoad = useCallback(() => {
    setRoad((prevRoad) => RoadMove(prevRoad));
  }, [Road]);

  const [previousTime, setPreviousTime] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const animateTime = (time) => {
      if (time - previousTime >= 500) {
        animateRoad();
        setPreviousTime(time);
      }
      animationFrameId = requestAnimationFrame(animateTime);
    };

    animationFrameId = requestAnimationFrame(animateTime);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [previousTime, animateRoad]);

  const windowWidth = window.innerWidth;
  const objectCount = Math.floor(windowWidth / 35);


  return (
      <div className="AllRoadContainer">
        {Array.from({ length: 20 }).map((_, rowIndex) => (
            <div key={rowIndex} className="RowContainer">
              {Array.from({ length: objectCount }).map((_, objectIndex) => {
                let component;

                if (rowIndex === 13) {
                  component = (
                      <div >
                        <ObjectCreatorBirdMemo objectIndex={road[objectIndex]} />
                      </div>
                  );
                } else if (rowIndex === 14) {
                  if (objectIndex === 5) {
                    component = (
                        <div ref={Hero.ref}>
                          <HeroMemo objectIndex={road[objectIndex]} />
                        </div>
                    );
                  } else {
                    component = (
                        <div >
                          <ObjectCreator objectIndex={road[objectIndex]} />
                        </div>
                    );
                  }
                } else if (rowIndex === 15) {
                  component = (
                      <div >
                        <ObjectCreatorGrassMemo objectIndex={road[objectIndex]} />
                      </div>
                  );
                } else if (rowIndex === 16) {
                  component = (
                      <div >
                        <ObjectCreatorEarthMemo objectIndex={road[objectIndex]} />
                      </div>
                  );
                }

                return (
                    <div key={objectIndex} className="PixelContainer">
                      {component}
                    </div>
                );
              })}
            </div>
        ))}
      </div>
  );
}

export default AllRoad;