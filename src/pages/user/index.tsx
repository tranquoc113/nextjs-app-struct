import Head from 'next/head';
import {useEffect, useState} from "react";
import Button from "../../component/Button";
export default function User() {
    const [count, setCount]=useState(0);
    const [visible,setVisible]=useState(true);

    useEffect(()=>{
// DidMount & DidUpdate
        return()=>{
            // DidWillUnmount as Component destroy
        }
    })
    useEffect(()=>{
        // only one call
        console.log('call 1 ')
    },[])

    useEffect(()=>{
        console.log('call when count change');
    }, [count])
    return <>

        <Head>
            <title>User</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>User--{count}</div>
        <button onClick={()=>setCount(count+1)}>Count</button>
        <button onClick={()=>setVisible(!visible)}>Hide/Show</button>
        {visible&&<Button/>}
    </>
}
