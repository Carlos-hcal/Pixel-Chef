import "./secondSection.css"
import root from "./src/root.png"
import hollowKnight from "./src/hollow_knight.png"
import smartUniverse from "./src/smart_universe.png"
import arrowLeft from "./src/arrow_left.png"
import arrowright from "./src/arrow_right.png"


function SecondSection() {

    return (
        <section className="second-container">
            <figure>
                <img className="arrow_left" src={arrowLeft} alt="aroowLeft" />
            </figure>
            <img src={root} alt="Root"/>
            <img src={hollowKnight} alt="HK"/>
            <img src={smartUniverse} alt="SU"/>
            <figure>
                <img className="arrow_right" src={arrowright} alt="arrowRight" />
            </figure>
        </section>
    );
};

export default SecondSection