import React from "react";

const Empty = React.forwardRef((props, ref) => {
    return <div ref={ref} style={{ width: "100%", height: "100%" }}></div>;
});

export default Empty;