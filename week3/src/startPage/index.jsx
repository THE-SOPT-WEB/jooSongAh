import React from "react";
import "./startPage.css";
import { Link } from "react-router-dom";

function StartPage(){
    return(
        <div id="start-page">
            <header className="header">
                <h1>❤️🧡💛💚💙💜나의 최애 카페 월드컵❤️🧡💛💚💙💜</h1>
            </header>
            <main>
                <img className="start-page--img" src="./assets/공지철.jpg" alt="myhusband"/>
                <Link className="start-game--link linkStyle" to={"/gamePage"}>
                    <button className="start-game--button">Game Start</button>
                </Link>
            </main>
        </div>
    );
}

export default StartPage;