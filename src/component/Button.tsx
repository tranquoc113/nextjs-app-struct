import {useEffect} from "react";

export default function Button(){
    useEffect(()=>{
        return()=>{
            console.log('destroy butto')
        }
    })
    return(<h1>This is button</h1>)
}
