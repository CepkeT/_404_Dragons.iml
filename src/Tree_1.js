/*function Tree_1() {
    return (
        <div>
            <img id={"tree_1"} src="/Icons/Landscape/tree_1.png"/>
        </div>
    )

}
export default Tree_1*/
import React from "react";

const Tree_1= React.forwardRef((props, ref) => {
        return <div ref={ref}>
            <img  id={"tree_1"} src="/Icons/Landscape/tree_1.png"/>
        </div>
    });
export default Tree_1;