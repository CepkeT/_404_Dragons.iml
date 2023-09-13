import ObjectGeneratorTop from "./ObjectGeneratorTop";
import ObjectGeneratorBottom from "./ObjectGeneratorBottom";
import ObjectGeneratorMid from "./ObjectGeneratorMid";
import ObjectCreatorGrass from "./ObjectCreatorGrass";
import ObjectGeneratorEarth from "./ObjectGeneratorEarth";

function RoadGenerator({ road, getDivSizeAction, heroOffsetAction }) {
    let roadWithHero = [-1];
    roadWithHero.push(...road);

    return (
        <div className="road-container">
            <div className="row">
                <ObjectGeneratorTop getDivSizeAction={getDivSizeAction} road={roadWithHero} />
            </div>
            <div className="row">
                <ObjectGeneratorBottom road={roadWithHero} heroOffsetSetterAction={heroOffsetAction} />
            </div>
            <div className="row">
                <ObjectCreatorGrass road={roadWithHero} />
            </div>
            <div className="row">
                <ObjectGeneratorEarth road={roadWithHero} />
            </div>
        </div>
    );
}

export default RoadGenerator;