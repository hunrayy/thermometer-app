import react from 'react'
import { useState } from 'react';
import Random from "./Random";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10)
  const [color, setColor] = useState("")
  const [emoji, setEmoji] = useState("")



  const handleChange1 = () => {
    // setting the increament button to a maximum of 30
    if (temperatureValue === 30) return;

    // setting the state of the "temperatureValue" to increament by 1
    const newTemp = temperatureValue + 1

    setTemperatureValue(newTemp)

    // placing the various colors and emoji needed for the increament
    newTemp >= 10 ? setColor("neutral") : null;
    newTemp >= 15 ? setColor("hot") : null;
    newTemp > 19 ? setColor("veryHot") : null
    newTemp > 1 ? setEmoji(<span></span>) : null
    newTemp >= 20 ? setEmoji(<span>&#127774;</span>) : null

  
  }



  const handleChange2 = () => {

    // setting the decreament button to a minimum of -10
    if(temperatureValue == -10) return;

    // setting the state of the "temperatureValue" to decreament by 1
    const newTemp = temperatureValue - 1

    setTemperatureValue(newTemp)

    // placing the various colors and emoji needed for the decreament
    newTemp <= 19 ? setColor("hot") : null
    newTemp <= 10 ? setColor("neutral") : null
    newTemp < 1 ? setColor("cold") : null
    newTemp <= 20 ? setEmoji(<span></span>) : null
    newTemp <= 1 ? setEmoji(<span>&#129398;</span>) : null
   

  }
  return (<>
      <div className='div'>{emoji}</div>
    <div className='body'>
      <div className='app-container'>
        <div className='temperature-display-container'>
          <div className={`temperature-display ${color}`}>{temperatureValue}&ordm;C</div>
        </div>
        <div className='button-container'>
          <button onClick={handleChange1}>+</button>
          <button onClick={handleChange2}>-</button>
        </div>
    </div>
    </div>
    {/* <Random /> */}
    </>
  );
}

export default App;