import '../styles/ImageBoard.scss';
import { Dispatch, SetStateAction } from 'react';
import Card from './Card';
import Cat from './types';

function ImageBoard( {cats, shuffle, score, setScore}: {cats:Cat[], shuffle:()=>void, score:number, setScore:Dispatch<SetStateAction<number>>} ) {

    return (
        <>
            {cats.map( (cat, index) => {
                return <Card cat={cat} id={cat.id} key={index} shuffle={shuffle} score={score} setScore={setScore}/>
            })}
        </>
    );
}

export default ImageBoard;

