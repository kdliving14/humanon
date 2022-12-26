import Bars from './Bars';
import { useState } from 'react';

// images
import user from "./images/user.jpg"
import oppt from "./images/oppt.jpg"

function App() {
// =======================================
  // starter variables & states
  const [uHP, setUHP] = useState(100)
  const [oHP, setOHP] = useState(100)
// =======================================
  // styling
  const battlerStyle ={
    flex:"50%",
    margin: 5
  }
  const container={
   display: "flex"
  }

  const images={
    height:250
  }
// =======================================
  // app start
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Humanon</h1>
      <div style={container}>
        <div className="USER" style={battlerStyle}>
          <img src={user} alt="User" style={images}/>
          <br></br>
          <span>User HP</span>
          <Bars hp = {uHP}/>
          <button onClick={()=>setOHP(oHP - 10)}>DMG Oppt</button>
        </div>

        <div className='OPPNT' style={battlerStyle}>
          <img src={oppt} alt="Opponent" style={images}/>
          <br></br>
          <span>Opponent HP</span>
          <Bars hp = {oHP}/>
          <button onClick={()=>setUHP(uHP - 10)}>DMG User</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
