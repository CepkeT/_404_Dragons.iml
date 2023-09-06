import React from "react";

const Empty = React.forwardRef((props, ref) => {
    return <div ref={ref}></div>;
});

export default Empty;