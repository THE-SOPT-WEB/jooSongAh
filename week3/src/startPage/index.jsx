import React from "react";
import "./startPage.css";
import { Link } from "react-router-dom";

function StartPage(){
    return(
        <div id="start-page">
            <header className="header">
                <h1>β€οΈπ§‘ππππλμ μ΅μ  μΉ΄ν μλμ»΅β€οΈπ§‘ππππ</h1>
            </header>
            <main>
                <img className="start-page--img" src="./assets/κ³΅μ§μ² .jpg" alt="myhusband"/>
                <Link className="start-game--link linkStyle" to={"/gamePage"}>
                    <button className="start-game--button">Game Start</button>
                </Link>
            </main>
        </div>
    );
}

export default StartPage;