import React, {useCallback, useEffect, useRef} from "react";

function Empty({getDivAction, time}){
    const emptyRef = useRef(null);

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
    return <div ref={emptyRef} className="Empty"></div>;
}
export default Empty;