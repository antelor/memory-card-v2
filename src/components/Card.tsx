import { useState, useEffect} from "react";
import Cat from './types';
import '../styles/Card.scss';

function Card({cat, id, clickCheck} : {cat:Cat, id:string, clickCheck:(id:string)=>void}) {
    const [catId, setCatId] = useState("")

    useEffect(
        () => {
            setCatId(id)
        }
        , [id]
      )

    return (
        <>
            <div data-id={catId} className="catCard" >
                { cat ? <img src={cat.url} onClick={()=>{clickCheck(catId)}}/> : ''}
            </div>
        </>
    );
}

export default Card;