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

  useEffect(
    () => {
      fetch(`https://api.thecatapi.com/v1/images/search?limit=10&api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data =>{
        setCatArray(data)
      })
    }, []
  )

  return (
    <>
      <Scoreboard />
      <ImageBoard cats={catArray}/>
    </>
  )
}

export default App
