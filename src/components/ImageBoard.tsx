import '../styles/ImageBoard.scss';
import Card from './Card';
import Cat from './types';
import '../styles/ImageBoard.scss'

function ImageBoard( {cats, clickCheck}: {cats:Cat[], clickCheck:(id:string)=>void} ) {

    return (
        <div className='imageBoard'>
            {cats.map( (cat, index) => {
                return <Card cat={cat} id={cat.id} key={index} clickCheck={clickCheck}/>
            })}
        </div>
    );
}

export default ImageBoard;

