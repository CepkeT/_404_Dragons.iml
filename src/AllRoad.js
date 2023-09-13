import React, { useEffect, useState, useRef } from "react";
import RoadGenerator from "./RoadGenerator";
import "./style/AllRoad.css";
import road404 from "./Game/Road404";

function AllRoad() {
  road404.GenerateLevel();
  road404.RoadSize = 40;

  const [road, setRoad] = useState(road404.Road);
  const divRef = useRef(null);
  let cellSize = null;
  let divOffset = 0;
  let _heroOffsetSetter = (offset)=>{};

  function GetDivSize(getDivSize){
    cellSize = getDivSize();
  }
  function SetPlannedDivMove(timeout){
    setTimeout(() =>{
      if (divRef.current == null || cellSize == null){
        SetPlannedDivMove(timeout);
        return;
      }

      divOffset -= 1;
      let nextUpdateNeeded = true;

      if (divOffset <= -cellSize){
        divOffset += cellSize;
        nextUpdateNeeded = false;
      }


      if (nextUpdateNeeded){
        _heroOffsetSetter(-divOffset);
        divRef.current.style.left = `${divOffset}px`;
        SetPlannedDivMove(100);
      } else {
        road404.MoveRoad();
        setRoad(road404.Road);
      }
    }, timeout)
  }


function  HeroOffsetSetterAction(heroOffsetSetter) {
  _heroOffsetSetter = heroOffsetSetter;}

  useEffect(() => {
    return () => {
      divRef.current.style.left = `${divOffset}px`;
      _heroOffsetSetter(-divOffset);
    }
  })

  SetPlannedDivMove(1);

  return(
      <div className="Road">
        <div ref = {divRef}>
          <RoadGenerator
            getDivSizeAction={GetDivSize}
            road={road}
            heroOffsetAction={HeroOffsetSetterAction}
          ></RoadGenerator>
        </div>
      </div>
      )
}
export default AllRoad;
