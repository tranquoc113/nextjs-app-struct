import {useCallback, useEffect, useState} from "react";

export default function UseCallbackDemo(){
    const [count, setCount]=useState(0);
    const handCount=useCallback(()=>{
        setCount(count+1);
    }, [count])
    console.log(count);
    useEffect(()=>{
        console.log('call change', count)
    })
    return(
        <div>
            <p>Count-- {count}</p>
            <button onClick={handCount}>Count</button>
        </div>
    )
}
