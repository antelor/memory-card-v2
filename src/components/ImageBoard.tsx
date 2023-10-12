/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/ImageBoard.scss';
import Card from './Card';

function ImageBoard( {cats}: {cats:any[]} ) {
    return (
        <>
            {cats.map( (cat, index) => {
                return <Card cat={cat} id={cat.id} key={index}/>
            })}
        </>
    );
}

export default ImageBoard;

