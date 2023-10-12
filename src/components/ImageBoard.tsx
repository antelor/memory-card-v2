/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/ImageBoard.scss';
import Card from './Card';

function ImageBoard( {cats, shuffle, score, setScore}: {cats:any[], shuffle:any, score:number, setScore:any} ) {

    return (
        <>
            {cats.map( (cat, index) => {
                return <Card cat={cat} id={cat.id} key={index} shuffle={shuffle} score={score} setScore={setScore}/>
            })}
        </>
    );
}

export default ImageBoard;

