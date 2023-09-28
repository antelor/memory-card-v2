import './styles/App.scss';
import Scoreboard from './components/Scoreboard';
import ImageBoard from './components/ImageBoard';

function App() {
  

  return (
    <>
      <Scoreboard />
      <ImageBoard images={images}/>
    </>
  )
}

export default App
