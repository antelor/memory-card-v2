/* eslint-disable @typescript-eslint/no-explicit-any */
import './styles/App.scss';
import Scoreboard from './components/Scoreboard';
import ImageBoard from './components/ImageBoard';
import { useEffect, useState } from 'react';
import API_KEY from './config';

const startingArray = [
  {id:''},
]

function App() {
  const [catArray, setCatArray] = useState(startingArray)
  const [score, setScore] = useState(0);

  useEffect(
    () => {
      fetch(`https://api.thecatapi.com/v1/images/search?limit=2&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data =>{
        setCatArray(data)
      })
    }, []
  )

  return (
    <>
      <Scoreboard score={score}/>
      <ImageBoard cats={catArray} score={score} setScore={setScore}/>
    </>
  )
}

export default App
