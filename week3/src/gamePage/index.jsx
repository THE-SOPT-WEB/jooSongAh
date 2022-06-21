import React from "react";
import "./gamePage.css";
import {useRef,useState, useEffect} from "react";
import ResultPage from "../resultPage";

const initialGameInfo = [
	{
		img: "./assets/메가커피.jpg",
		name: "메가커피",
	},
    {
		img: "./assets/블루보틀.jpg",
		name: "블루보틀",
	},
    {
		img: "./assets/빽다방.jpg",
		name: "빽다방",
	},
    {
		img: "./assets/스타벅스.jpg",
		name: "스타벅스",
	},
];

function GamePage(){
    const [gameInfo, setGameInfo]= useState(initialGameInfo); //게임 리스트 담는거
    const [IsOver, setIsOver]= useState(false); //최종 게임 끝 
    let matchWinners=useRef([]); //각 라운드 우승자 담아두는 배열

    const 이긴놈찾기 = (winners) => { //변수명 내가 안지음
        setGameInfo(gameInfo.slice(2)); //앞에 두명 자르고 setGameInfo
        matchWinners.current.push(winners);//우승자는 matchWinners에 push
    }

    useEffect(() =>{
        if(gameInfo.length===0) {//gameInfo에 남아있는 사람이 없을 때 
            if(matchWinners.current.length===1 ) {setIsOver(true);} //game over
            else {
                setGameInfo(matchWinners.current); //현재까지 matchWinners를 다시 setGameInfo
                matchWinners.current=[]; //matchWinners 초기화
            }
        }
    },[gameInfo]);


    return(
        <div id="game-page">
            <header className="header">
                <h1>당신의 최애 카페를 골라주세요!</h1>
            </header>
            <main className="game-page--main">
                <section className="content-wrapper">
                    {IsOver && <ResultPage winner={matchWinners.current}/>}
                    {!IsOver && <img className="versus-img" src="./assets/vs.png" alt="versus"/>}
                    {!IsOver && gameInfo.map((content, idx)=>{
                        if (idx >= 2) return null;
                        const{img,name}=content;
                        return(
                            <div className="content" onClick={() => 이긴놈찾기(content)} key={content.name}>
                                <img className="content-img" src={img}/>
                                <p className="content-name">{name}</p>
                            </div>
                        );
                    })}
                </section>
            </main>
        </div>
    );
}

export default GamePage;