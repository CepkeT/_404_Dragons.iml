import React from 'react';
import { createRoot } from 'react-dom/client';
import AllRoad from "./AllRoad";
import roadGenerator from "./RoadGenerator";

let RoadArray = roadGenerator;
const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AllRoad Road={RoadArray} />
    </React.StrictMode>
);