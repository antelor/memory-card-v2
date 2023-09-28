/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/ImageBoard.scss';
import Card from './Card';

function ImageBoard( {cats}: {cats:any[]} ) {
    return (
        <>
            <Card cat={cats[0]} id={cats[0].id}/>
        </>
    );
}

export default ImageBoard;

