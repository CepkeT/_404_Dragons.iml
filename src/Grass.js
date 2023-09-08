/*function Grass() {

    return (
        <div>
            <img src="/Icons/Landscape/grass.png" style={{ width: "100%", height: "100%" }}/>
        </div>
    )

}
export default Grass*/

import React from "react";

const Grass= React.forwardRef((props, ref) => {
    return <div ref={ref}>
        <img  id={"Grass"} src="/Icons/Landscape/grass.png" style={{ width: "100%", height: "100%" }}/>
    </div>
});
export default Grass;