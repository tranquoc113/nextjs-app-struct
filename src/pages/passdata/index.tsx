import {useEffect, useMemo} from "react";

export default function PassData(props){
    // prop({title:"change Title"});
    console.log(props)
    const {updateFormData}=props;
    useEffect(()=>{
        updateFormData('Pass data')
    },[])
    return(
        <div>
            {/*<button onClick={() => updateFormData('Pass data')}>*/}

            {/*</button>*/}
        </div>
    )
}
