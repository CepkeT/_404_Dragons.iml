import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from "./Hero";
import Grass from "./Grass";
import Earth from "./Earth";
import Tree_1 from "./Tree_1";
import Tree_2 from "./Tree_2";
import Bird from "./Bird";
import Bust_1 from "./Bust_1";
import Cliff_start from "./Cliff_start";
import Cliff_end from "./Cliff_end";
import Cliff from "./Cliff";
const Land_upper_level= ReactDOM.createRoot(document.getElementById('Land_upper_level'));
const Bird_lower_level= ReactDOM.createRoot(document.getElementById('Bird_lower_level'));
const Land_lower_level= ReactDOM.createRoot(document.getElementById('Land_lower_level'));
const Grass_and_Cliff = ReactDOM.createRoot(document.getElementById('Grass_and_Cliff'));
const Grass_and_earth= ReactDOM.createRoot(document.getElementById('Grass_and_earth'));
const Earth_low = ReactDOM.createRoot(document.getElementById('Earth_low'));


/*
Land_upper_level.render(
    <React.StrictMode>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <Bust_1></Bust_1>
        <td></td>
        <td></td>
        <td></td>
    </React.StrictMode>
);
Bird_lower_level.render(
    <React.StrictMode>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <Bird></Bird>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </React.StrictMode>
);*/
/*
Grass_and_Cliff.render(
    <React.StrictMode>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <Cliff_start></Cliff_start>
        <Cliff></Cliff>
        <Cliff></Cliff>
        <Cliff></Cliff>
        <Cliff></Cliff>
        <Cliff_end></Cliff_end>
        <td></td>
        <td></td>
        <td></td>
    </React.StrictMode>
);
*/
/*Earth_low.render(
    <React.StrictMode>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
            <Earth></Earth>
    </React.StrictMode>
);
Land_lower_level.render(
    <React.StrictMode>
            <Hero ></Hero>
            <td></td>
            <td></td>
            <Tree_1></Tree_1>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Tree_2></Tree_2>
            <td></td>
            <td></td>
            <td></td>
            <Tree_1></Tree_1>
            <td></td>
    </React.StrictMode>
);*/

const randomIndex = Math.floor(Math.random() * 16);
let randomCount = Math.floor(Math.random() * 4) + 1;

Land_lower_level.render(
    <React.StrictMode>
            <Hero />
        {[...Array(16)].map((_, i) => {
                if (i === randomIndex) {
                        let randomTreeCount;
                        return (
                    <>

                        {[...Array(randomCount)].map((_, j) => <td></td>)}
                        <Tree_1 />
                        {[...Array(randomTreeCount)].map((_, k) => <Tree_1 />)}
                        <td></td>
                        <Tree_2 />
                    </>
                );
            } else {
                return <td></td>;
            }
        })}
    </React.StrictMode>,
    document.getElementById('root')
);
Bird_lower_level.render(
    <React.StrictMode>
            {[...Array(16)].map((_,i) =>
                i === randomIndex ? <Bird /> : <td></td>
            )}
    </React.StrictMode>,
    document.getElementById('root')
);


Grass_and_earth.render(
    <React.StrictMode>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
        <Grass></Grass>
    </React.StrictMode>
);
