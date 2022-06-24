import './findBeer.css';
import {useRef,useState, useEffect} from "react";
import axios from "axios"


function FindBeer() {
  const [beerBarList, setBeerBarList]=useState([]);
  const [isCheck,setIsCheck]=useState(false); //near에 체크가 되어있는지
  const [isLoading, setIsLoading]=useState(false);
  const userInputLocation = useRef([]);

  async function 근처맥주집가져오기() {
    const{x,y}=await 위치가져오기();

    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword?radius=20000",
      {
        headers: {
          Authorization: `${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          x: x,
          y: y,
          radius: 1000,
          query: '맥주',
        }
      }
    );

    setBeerBarList(result.data.documents); //documents 객체 넣어주기 
  }

  async function 특정지역맥주집가져오기(location) {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword",
      {
        headers: {
          Authorization: `${process.env.REACT_APP_KAKAO_AK}`,
        },
        params: {
          query: location + " " + "맥주",
        }
      }
  );
  setBeerBarList(result.data.documents); //documents 객체 넣어주기 
};

  function handleClick(){ //검색버튼이 클릭되었을 경우;
    setIsLoading(prev=>!prev);
    if(isCheck){
      return 근처맥주집가져오기();
    }else{
      특정지역맥주집가져오기(userInputLocation.current.value);
    }
  }

  const getLocation = (errHandler) => {
    if ("geolocation" in navigator) {
            return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
        (position) => {
            const {
            coords: { latitude: y, longitude: x },
            } = position;
            resolve({ x, y });
        },
        (e) => {
            alert("HTTPS 연결을 확인해주세요.");
            errHandler && errHandler();
        }
        );
    });
    } 
  };

  async function 위치가져오기() {
    const result = await getLocation();
    return result;
  }

  useEffect(() => {
    
  }, [isLoading]);

  function checkClickHandler (){
    setIsCheck(prev=>!prev);
  }

  return (
    <div className="find-beer">
      <main>

        <h1>🍺맥주를 갈겨보자🍺</h1>
        <hr/>

        <section className="search">
          <form className="search--near-location">
            <strong>지금 있는 곳에서 볼게요!</strong>
            <input id="checkbox" type="checkbox" onClick={checkClickHandler}/>
          </form>
          <form className="search--input-location">
            <strong>원하는 지역으로 볼게요!</strong>
            <input id="textbox" type="text" placeholder='지역을 입력해주세요' ref={userInputLocation} disabled={isCheck} />
          </form>
          <button className="search-button" onClick={()=>handleClick()}>검색하기</button>
        </section>

        <hr/>
        {/* <p disabled={isLoading}>로딩중...</p> */}
        {!beerBarList.length && <p>가게가 존재하지 않아요😥</p>}
        {beerBarList && beerBarList.map(({place_name, place_url, phone, distance, address_name }, idx) => {
              return (
                <article className="card" key={idx}>
                  <p className="card--title" href={place_url}>{place_name}</p>
                  <section className="card--detail">
                    <p className="card--phone">{phone || "번호 없음"}</p>
                    {isCheck && <p className="card--address">{distance}m</p>}
                    {!isCheck&& <p className="card--address">{address_name}</p>}
                  </section>
                </article>
              );
            }
          )}
      </main>
    </div>
  );
}

export default FindBeer;
