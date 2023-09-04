import { useRef } from 'react'


const StyleChanger = () => {
    const containerRef = useRef<HTMLDivElement[]>([]);

    const ChangeColor = () => {
        if (containerRef.current) {
            containerRef.current[0].style.backgroundColor = "white";
            containerRef.current[1].style.backgroundColor = "white";
        }
    }

    const ChangeDivs = () => {
        if (containerRef.current) {
            const div1 = containerRef.current[0].textContent;
            containerRef.current[0].textContent = containerRef.current[1].textContent
            containerRef.current[1].textContent = div1
        }
    }

    return (<>

        <div ref={(elem: HTMLDivElement)=>containerRef.current[0] = elem} style={{ background: "blue", width: "200px", height: "200px" }}>Blue</div>
        <div ref={(elem: HTMLDivElement)=>containerRef.current[1] = elem} style={{ background: "red", width: "200px", height: "200px" }}>Red</div>

        <button onClick={ChangeColor}>To color</button>
        <button onClick={ChangeDivs}>To change divs</button>
    </>)
}

export default StyleChanger