// AllRoad.js
import React, { useEffect, useState, useRef } from "react";
import RoadGenerator from "./RoadGenerator";
import Hero from "./Hero";
import ObjectGeneratorTop from "./ObjectGeneratorTop";
import ObjectGeneratorEarth from "./ObjectGeneratorEarth";
import ObjectGeneratorGrass from "./ObjectCreatorGrass";
import ObjectGeneratorMid from "./ObjectGeneratorMid";
import "./style/AllRoad.css";

let personNeedJump = false;

function AllRoad() {
  const roadGenerator = useRef(new RoadGenerator());
  const [roadArr, setRoadArr] = useState(roadGenerator.current.getContent());
  const divRef = useRef(null);
  const heroRef = useRef(null);

  let offsetRoadInterval = 0;
  let offsetHeroInterval = 0; //450
  let divSize = null;
  let needNextUpdate = true;

  let heroTopIndex = 0; //160

  function getDivSize(getDivSizeAction) {
    if (getDivSizeAction() !== null) {
      divSize = getDivSizeAction();
    }
  }

  function setDivMove(time) {
    setTimeout(() => {
      if (divRef.current === null || divSize === null || heroRef === null) {
        setDivMove(time);
        return;
      }

      setTimeout(() => {
        if (heroTopIndex <= -80) {
          personNeedJump = false;
        }

        if (personNeedJump === true && heroTopIndex !== -80) {
          heroTopIndex -= 2;
        } else if (personNeedJump === false && heroTopIndex !== 0) {
          heroTopIndex += 2;
        }
      }, 50);

      offsetRoadInterval -= 1;
      offsetHeroInterval += 1;

      if (offsetRoadInterval <= -divSize) {
        offsetRoadInterval += divSize;
        needNextUpdate = false;
        setRoadArr(roadGenerator.current.RoadMoveLogic(roadArr));
      }

      heroRef.current.style.top = `${heroTopIndex}px`;

      if (needNextUpdate) {
        divRef.current.style.left = `${offsetRoadInterval}px`;
        heroRef.current.style.left = `${offsetHeroInterval}px`;
        setDivMove(time);
      }
    }, time);
  }

  useEffect(() => {
    return () => {
      heroRef.current.style.left = `0px`; //450
      heroRef.current.style.left = `${offsetRoadInterval}px`;
    };
  });

  setDivMove(10);

  let jumpEvent = (event) => {
    personNeedJump = true;
  };

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
                      <ObjectGeneratorTop
                          time={50}
                          getDivAction={getDivSize}
                          objectIndex={roadArr[objectIndex]}
                      />
                  );
                } else if (rowIndex === 14) {
                  if (objectIndex === 5) {
                    component = <Hero heroRef={heroRef} />;
                  } else {
                    component = (
                        <ObjectGeneratorMid
                            time={50}
                            getDivAction={getDivSize}
                            objectIndex={roadArr[objectIndex]}
                        />
                    );
                  }
                } else if (rowIndex === 15) {
                  component = (
                      <ObjectGeneratorGrass
                          getDivAction={getDivSize}
                          objectIndex={roadArr[objectIndex]}
                      />
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

/*import React, { useEffect, useState, useRef } from "react";
import RoadGenerator from "./RoadGenerator";
import Hero from "./Hero";
import ObjectGeneratorTop from "./ObjectGeneratorTop";
import ObjectGeneratorEarth from "./ObjectGeneratorEarth";
import ObjectGeneratorGrass from "./ObjectCreatorGrass";
import ObjectGeneratorMid from "./ObjectGeneratorMid";
import "./style/AllRoad.css";

let personNeedJump = false;

function AllRoad({Road}) {

  const [RoadArr, setRoad] = useState(Road.getContent());
  const divRef= useRef(null);
  const heroRef = useRef(null);

  let offsetRoadInterval = 0;
  let offsetHeroInterval = 0; //450
  let divSize = null;
  let needNextUpdate = true;

  let heroTopIndex = 0; //160


  function getDivSize(getDivSizeAction) {
    if (getDivSizeAction() !== null) {
      divSize = getDivSizeAction();
    }
  }

  function SetDivMove(time) {
    setTimeout(() => {

      if (divRef.current === null || divSize===null || heroRef === null) {
        SetDivMove(time);
        return;
      }

      setTimeout(()=>{

        if(heroTopIndex <= -80){ //80
          personNeedJump = false;
        }

        if (personNeedJump === true && heroTopIndex !== -80){ //160
          heroTopIndex -= 2;
        }
        else if (personNeedJump === false && heroTopIndex !== 0) { //160
          heroTopIndex += 2;
        }
      }, 50);

      offsetRoadInterval -= 1;
      offsetHeroInterval += 1;

      if (offsetRoadInterval <= -divSize) {
        offsetRoadInterval += divSize;
        needNextUpdate = false;
        setRoad(Road.RoadMoveLogic(RoadArr));
      }

      heroRef.current.style.top = `${heroTopIndex}px`;

      if(needNextUpdate){
        divRef.current.style.left = `${offsetRoadInterval}px`;
        heroRef.current.style.left = `${offsetHeroInterval}px`;
        SetDivMove(time);
      }
    }, time)
  }

  useEffect(()=>{
    return ()=>{
      heroRef.current.style.left = `0px`; //450
      heroRef.current.style.left = `${offsetRoadInterval}px`;
    }
  })
/*
  SetDivMove(10);
  let JumpEvent = (event)=> {
    /* 32 - Space button code*/
    //console.log(`Samurai location: ${samuraiRef.current.style.top}`);
  /*  personNeedJump = true;
  }

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
                      <ObjectGeneratorTop
                          time={50}
                          getDivAction={getDivSize}
                          objectIndex={RoadArr[objectIndex]}
                      />
                  );
                } else if (rowIndex === 14) {
                  if (objectIndex === 5) {
                    component = <Hero heroRef={heroRef} />;
                  } else {
                    component = (
                        <ObjectGeneratorMid
                            time={50}
                            getDivAction={getDivSize}
                            objectIndex={RoadArr[objectIndex]}
                        />
                    );
                  }
                } else if (rowIndex === 15) {
                  component = (
                      <ObjectGeneratorGrass
                          getDivAction={getDivSize}
                          objectIndex={RoadArr[objectIndex]}
                      />
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

export default AllRoad;*/
