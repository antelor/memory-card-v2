import { useState, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
function Card({cat, id, shuffle, score, setScore} : {cat:any, id:string, shuffle:any, score:number, setScore:any}) {
    const [catId, setCatId] = useState('')

    useEffect(
        () => {
            setCatId(id)
        }
        , [id]
      )

    return (
        <>
            <div data-id={catId}>
                { cat ? <img src={cat.url} onClick={()=>{setScore(score+1), shuffle()}}/> : ''}
            </div>
        </>
    );
}

export default Card;