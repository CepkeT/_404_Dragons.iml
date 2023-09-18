import React, {useCallback, useEffect, useRef} from "react";

function Tree_1({getDivAction, time}){
    const tree_1Ref = useRef(null);
    const getDivSizeAction = useCallback(() => {
        return birdRef.current == null ? null : birdRef.current.offsetWidth;
    }, []);

    useEffect(() => {
        let timeoutId;

        if (getDivAction !== undefined) {
            timeoutId = setTimeout(() => {
                getDivAction(getDivSizeAction);
            }, time);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [getDivAction, getDivSizeAction, time]);
    return <div ref={tree_1Ref} >
        <img id={"tree_1"} src="/Icons/Landscape/tree_1.png" style={{ width: "100%", height: "100%" }}/>
    </div>;
}
export default Tree_1;
