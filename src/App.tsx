import './styles/App.scss';
import Scoreboard from './components/Scoreboard';
import ImageBoard from './components/ImageBoard';
import WinScreen from './components/WinScreen';
import { useEffect, useState } from 'react';
import API_KEY from './config';
import Cat from './components/types';
const length = 8;

const startingArray:Cat[] = [
  {id:'', url:'', width:0, height:0},
]


function App() {
  const [catArray, setCatArray] = useState(startingArray)
  const [score, setScore] = useState(0);
  const [hiscore, setHiscore] = useState(0);
  const [clickedCats, setClickedCats] = useState<string[]>([]);
  const [ winState, setWinState ] = useState<boolean>(false);

  const fetchCats = ():void => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=${length}&api_key=${API_KEY}`)
    .then(response => response.json())
    .then(data =>{
      const cats:Cat[] = [];
      data.forEach((object: Cat) => {
        cats.push(object);
      });
      setCatArray(data)
    })
  }

  useEffect(
    () => {
      fetchCats();
    }, []
  )

  const shuffle = ():void =>{
    const newCatArray = catArray;
    for (let i = newCatArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newCatArray[i], newCatArray[j]] = [newCatArray[j], newCatArray[i]];
    }

    setCatArray(newCatArray);
  }

  const restart = ():void =>{
    setScore(0);
    setClickedCats([]);
    shuffle();
    fetchCats();
    setWinState(false);
  }

  const winCheck = ():void => {
    if (score === length-1) {
      setWinState(true);
    }
  }

  const clickCheck = (id:string):void => {
    if (clickedCats.includes(id)) {
      setScore(0);
      setClickedCats([]);
      shuffle();
      (score>hiscore ? setHiscore(score) : "");
    }
    else {
      setScore(score+1);
      (score>=hiscore ? setHiscore(score+1) : "");
      const newClickedCats = clickedCats;
      newClickedCats.push(id);
      setClickedCats(newClickedCats);
      winCheck();
      shuffle();
    }
  }

  

  return (
    <div className="appScreen">
      <WinScreen winState={winState} restart={restart}/>
      <Scoreboard score={score} hiscore={hiscore}/>
      <ImageBoard cats={catArray} clickCheck={clickCheck}/>
    </div>
  )
}

export default App
