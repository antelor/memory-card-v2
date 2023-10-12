import { useState, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
function Card({cat, id, score, setScore} : {cat:any, id:string, score:number, setScore:any}) {
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
                { cat ? <img src={cat.url} onClick={()=>setScore(score+1)}/> : ''}
            </div>
        </>
    );
}

export default Card;