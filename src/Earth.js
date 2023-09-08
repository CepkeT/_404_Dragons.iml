/*function earth() {

    return (
        <div>
            <img src="/Icons/Landscape/earth.png" style={{ width: "100%", height: "100%" }}/>
        </div>
    )

}
export default earth;*/

import React from "react";

const Earth= React.forwardRef((props, ref) => {
    return <div ref={ref}>
        <img  id={"Earth"} src="/Icons/Landscape/earth.png" style={{ width: "100%", height: "100%" }}/>
    </div>
});
export default Earth;