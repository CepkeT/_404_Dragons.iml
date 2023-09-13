/*function Tree_2() {
    return (
        <div>
            <img id={"tree_2"} src="/Icons/Landscape/tree_2.png"/>
        </div>
    )

}
export default Tree_2*/
import React from "react";

const Tree_2= React.forwardRef((props, ref) => {
    return <div ref={ref}>
        <img  id={"tree_2"} src="/Icons/Landscape/tree_2.png"/>
    </div>
});
export default Tree_2;