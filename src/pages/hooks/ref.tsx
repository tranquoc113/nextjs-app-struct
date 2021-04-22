import {useRef} from "react";

export default function ref(){
    const ref=useRef(null);
    const handFile=(()=>{
        ref.current.click();
    })
    return(
        <div>
            <input className="file-ref" type="file" ref={ref}/>
            <button className="btn-button-file" onClick={handFile}>selectFile</button>
        </div>


    )
}
