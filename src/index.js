import React from 'react';
import ReactDOM from 'react-dom/client';
import AllRoad from "./AllRoad";
import RoadCreator from "./RoadCreator";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

            <AllRoad Road = {RoadCreator.getContent()}/>

);