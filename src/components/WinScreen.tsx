import '../styles/WinScreen.scss'


const WinScreen = ({winState, restart}: {winState:boolean, restart:()=>void}) => {

    return (
        <div className="winBackground" style={{ 'display': winState ? 'flex' : 'none' }}>
            <div className='winMenu'>
                <div>
                    Ganaste
                </div>

                <button onClick={restart}>Restart</button>
            </div>
        </div>
    );
};

export default WinScreen;