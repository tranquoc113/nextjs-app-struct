import Image from 'next/image'
import {useState} from "react";
import {useDispatch, useSelector, RootStateOrAny} from 'react-redux';
import { incrementCounter, decrementCounter } from "../../redux/actions/counterActions";
import counterReducer from "../../redux/reducers/counterReducer";


function HomePageDemoRedux({prop}) {
    const count = useSelector((state: RootStateOrAny)  => state.counterReducer.count);
    console.log(count)
    const dispatch = useDispatch();
    const [payload, setPayload] = useState(0);
    return <div>
        <main>
            <div className="demo">ok</div>

            <Image
                alt="Next.js logo"
                src="/img/an.png"
                width={1200}
                height={400}
            />

            <span>current count : {count}</span>
            <div></div>
            <input type="number" onChange={(e) => setPayload(+e.target.value)}/><br/>
            <button onClick={() => dispatch(incrementCounter())}>Increase</button><br/>
            <button onClick={() => dispatch(decrementCounter())}>decrease</button>
        </main>

        Welcome to Next.js !</div>
}

export default HomePageDemoRedux
