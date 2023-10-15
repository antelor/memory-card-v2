import './styles/App.scss';
import Scoreboard from './components/Scoreboard';
import ImageBoard from './components/ImageBoard';
import { useEffect, useState } from 'react';
import API_KEY from './config';
import Cat from './components/types';


const startingArray:Cat[] = [
  {id:0, url:'', width:0, height:0},
]

// test comment for fork


function App() {
  const [catArray, setCatArray] = useState(startingArray)
  const [score, setScore] = useState(0);

  useEffect(
    () => {
      fetch(`https://api.thecatapi.com/v1/images/search?limit=7&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data =>{
        let cats:Cat[] = [];
        data.forEach((object: Cat) => {
          cats.push(object);
        });
        setCatArray(data)
      })
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


  return (
    <>
      <Scoreboard score={score}/>
      <ImageBoard cats={catArray} shuffle={shuffle} score={score} setScore={setScore}/>
    </>
  )
}

export default App
