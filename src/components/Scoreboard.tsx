/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/Scoreboard.scss'

function Scoreboard( {score, hiscore}: {score:number, hiscore:number}) {

  return (
    <div className='score'>
      <div>
        Score: {score}
      </div>
      <div>
        Hiscore: {hiscore}
      </div>
    </div>
  );
}

export default Scoreboard;
