import { useState } from 'react';
import './App.css';


const App = () => {
  const [toggle, setToggle] = useState(false);
    const toggler = () => {
      toggle ? setToggle(false): setToggle(true);
    };
    setInterval(() => {
      console.log('start timer')
    }, 1000);
  return (
    <div className="App">
      <button onClick={toggler}>Show profile</button>
      {toggle ? <div><p className="text"><span>FullName :</span> Achref Najeh <br />
      <span>bio:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit<br />Odit repellat eius accusantium<br /> sunt voluptatem <br />
      <img className="img1" src="me.jpg" alt="me" /> <br />
      <span>profession :</span> amet consectetur adipisicing elit</p>
      </div>
      : <span></span>}
    </div>
  )
}

export default App

  



