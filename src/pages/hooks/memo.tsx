import {useMemo, useState} from "react";

export default function UseMemoDemo(){
    useMemo(()=>{
        console.log('as constructor');
    },[])
    const [user, setUser]=useState(
        {
            firtName: 'Tran',
            lastName:'Quoc'
        }
    )
    const fullName=useMemo(()=>{
        return user.firtName+' - '+user.lastName;
    }, [user])

    return(
        <h1>{fullName}</h1>
    )
}
