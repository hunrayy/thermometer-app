import { useState } from "react"
const Random = () => {


    const [colorChanger, setColorChanger] = useState("red")
    


    function nameChange(){
        const colors = ["red", "blue", "yellow", "black", "purple", "gold", "orange"]
        const random = Math.floor(Math.random() * colors.length)
        setColorChanger(colors[random])
    }

    return<>
        <div style={{backgroundColor: colorChanger}}>{colorChanger}</div>


        <button onClick={nameChange}>click</button>
    </>
}

export default Random