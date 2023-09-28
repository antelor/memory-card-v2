import { useState, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
function Card({cat, id} : {cat:any, id:string}) {
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
                { cat ? <img src={cat.url}/> : ''}
            </div>
        </>
    );
}

export default Card;