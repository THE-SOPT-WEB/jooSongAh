import React from "react";
import "./resultPage.css";
import { Link } from "react-router-dom";

function ResultPage({winner}) {
    return ( 
        <div id="result-page">
            <header>
                <h1>카페 최강자는?</h1>
            </header>
            <main className="result-page--main">
                <section className="img--wrapper" >
                    <img className="crown-img" src="./assets/crown.png" alt="crown"/>
                    <img className="winner-img" src={winner[0].img}/>
                </section>
                <section className="button--wrapper">
                <Link className="replay-game--link linkStyle" to={"/"}>
                    <button className="replay-button">처음으로</button>
                </Link>
                <button className="cancel-button">공유하기</button>
                </section>
            </main>
        </div>
    );
}

export default ResultPage;

