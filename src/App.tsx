import './styles/App.scss';
import Scoreboard from './components/Scoreboard';
import ImageBoard from './components/ImageBoard';
import { useEffect, useState } from 'react';
import API_KEY from './config';
import Cat from './components/types';


const startingArray:Cat[] = [
  {id:'', url:'', width:0, height:0},
]

// test comment for fork


function App() {
  const [catArray, setCatArray] = useState(startingArray)
  const [score, setScore] = useState(0);
  const [clickedCats, setClickedCats] = useState<string[]>([]);

  const fetchCats = ():void => {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=4&api_key=${API_KEY}`)
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

  const winCheck = ():void => {
    console.log(score)
    if (score === 3) {
      alert('You win!')
      setScore(0);
      setClickedCats([]);
      shuffle();
      fetchCats();
    }
  }

  const clickCheck = (id:string):void => {
    console.log(id)
    console.log(clickedCats)
    console.log(clickedCats.includes(id))
    if (clickedCats.includes(id)) {
      setScore(0);
      setClickedCats([]);
      shuffle();
    }
    else {
      setScore(score+1);
      const newClickedCats = clickedCats;
      newClickedCats.push(id);
      setClickedCats(newClickedCats);
      winCheck();
      shuffle();
    }
  }

  

  return (
    <>
      <Scoreboard score={score}/>
      <ImageBoard cats={catArray} clickCheck={clickCheck}/>
    </>
  )
}

export default App
