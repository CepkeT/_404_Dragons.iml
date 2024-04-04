//Style
import '../Styles/style.css';
import React, {useRef, useState, useEffect} from "react";
import TreeCreator from "../Utilities/TreeCreator";
import Player from "./Player";
import BirdCreator from "../Utilities/BirdCreator";
import Ground from "./Ground";

let personNeedJump = false;

function AllRoad({Road}) {

    const [RoadArr, setRoad] = useState(Road.getContent());
    const trRef= useRef(null);
    const playerRef = useRef(null);

    let offsetRoadInterval = 0;
    let offsetPlayerInterval = 0; //450
    let tdSize = null;
    let needNextUpdate = true;

    let PlayerTopIndex = 0; //160

    /*setTimeout(args => {
        setRoad(roadMoveLogic(RoadArr));
        console.log("RoadArr: " + RoadArr);
    }, 250)*/

    function getTdSize(getTdSizeAction) {
        if (getTdSizeAction() !== null) {
            //console.log("GetTd: ", getTdSizeAction());
            tdSize = getTdSizeAction();
        }
    }

    function SetTrMove(time) {
        setTimeout(() => {

            if (trRef.current === null || tdSize===null || playerRef === null) {
                SetTrMove(time);
                return;
            }

            setTimeout(()=>{

                if(PlayerTopIndex <= -80){ //80
                    personNeedJump = false;
                }

                if (personNeedJump === true && PlayerTopIndex !== -80){ //160
                    PlayerTopIndex -= 2;
                }
                else if (personNeedJump === false && PlayerTopIndex !== 0) { //160
                    PlayerTopIndex += 2;
                }
            }, 50);

            offsetRoadInterval -= 1;
            offsetPlayerInterval += 1;

            if (offsetRoadInterval <= -tdSize) {
                offsetRoadInterval += tdSize;
                needNextUpdate = false;
                setRoad(Road.RoadMoveLogic(RoadArr));
            }

            playerRef.current.style.top = `${PlayerTopIndex}px`;

            if(needNextUpdate){
                trRef.current.style.left = `${offsetRoadInterval}px`;
                playerRef.current.style.left = `${offsetPlayerInterval}px`;
                SetTrMove(time);
            }
        }, time)
    }

    useEffect(()=>{
        return ()=>{
            playerRef.current.style.left = `0px`; //450
            trRef.current.style.left = `${offsetRoadInterval}px`;
        }
    })

    SetTrMove(10);
    let JumpEvent = (event)=> {
        /* 32 - Space button code*/
        console.log(`Player location: ${playerRef.current.style.top}`);
        personNeedJump = true;
    }

    //console.log(RoadArr);
    return (
        <div id={"GameField"}>
            <input id={"inputForJumpPerson"} type={"textfield"} onKeyPress={JumpEvent}/>
            <table>
                <tbody ref={trRef} id={"allRoadTr"}>
                <tr>
                    <BirdCreator getTdAction={getTdSize} time={50} objectIndex={RoadArr[0]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[1]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[2]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[3]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[4]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[5]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[6]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[7]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[8]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[9]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[10]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[11]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[12]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[13]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[14]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[15]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[16]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[17]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[18]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[19]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[20]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[21]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[22]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[23]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[24]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[25]}></BirdCreator>
                    <BirdCreator objectIndex={RoadArr[26]}></BirdCreator>
                </tr>
                <tr>
                    <TreeCreator getTdAction={getTdSize} time={50} objectIndex={RoadArr[0]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[1]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[2]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[3]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[4]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[5]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[6]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[7]}></TreeCreator>
                    <Player playerRef={ playerRef}></Player>
                    <TreeCreator objectIndex={RoadArr[8]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[9]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[10]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[11]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[12]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[13]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[14]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[15]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[16]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[17]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[18]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[19]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[20]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[21]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[22]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[23]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[24]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[25]}></TreeCreator>
                    <TreeCreator objectIndex={RoadArr[26]}></TreeCreator>
                </tr>
                <tr>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                    <Ground></Ground>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AllRoad
