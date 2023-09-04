import { useRef } from 'react'


const Counter = () => {
    const count = useRef(0);
    const divOfCount = useRef<HTMLDivElement>(null);


    return (<>
        <div ref={divOfCount}>{count.current}</div>

        <button onClick={() => {
            count.current++;
            divOfCount.current!.innerText = count.current.toString();
        }
        }>Adding</button>

        <button onClick={() => {
            count.current = 0;
            divOfCount.current!.innerText = count.current.toString();
        }
        }>Reset</button>
    </>)
}

export default Counter