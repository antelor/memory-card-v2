import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Cat from './types';

function Card({cat, id, shuffle, score, setScore} : {cat:Cat, id:number, shuffle:()=>void, score:number, setScore:Dispatch<SetStateAction<number>>}) {
    const [catId, setCatId] = useState(0)

    useEffect(
        () => {
            setCatId(id)
        }
        , [id]
      )

    return (
        <>
            <div data-id={catId} >
                { cat ? <img src={cat.url} onClick={()=>{setScore(score+1), shuffle()}}/> : ''}
            </div>
        </>
    );
}

export default Card;