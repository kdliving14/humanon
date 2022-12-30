import Bars from './Bars';
import { useState } from 'react';

// images from Unsplash (Temporary)
import userimg from "./images/user.jpg"
import opptimg from "./images/oppt.jpg"

function App() {
// =======================================
  // Starter variables & states
  const [user, setUser] = useState({
    hp: 100,
    atk: 10,
    def: 5,
    lvl: 1
  })

  const [opp, setOpp] = useState({
    hp: 100,
    atk: 10,
    def: 5,
    lvl: 1
  })

// =======================================
  // Styling
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
  //Helper functions 

  function damage(def, atk){    
    // 1/3 chance for extra DMG (if less than 3, no extra dmg)
    let extraDmg = (Math.floor(Math.random()*(4-1))+1<3) ? 0 : Math.floor(Math.random()*atk+1)

    // 2/3 chance to fully block DMG (if less than 3, use all def, else use some def if any)
    let defBlock = (Math.floor(Math.random()*(4-1))+1<3 ? def : Math.floor(Math.random()*def))

    // console.log("atk: ", atk)
    // console.log("extra: ", extraDmg)
    // console.log("block: ", defBlock)
    // console.log("atk + extra - block: ", atk + extraDmg - defBlock)

    //resulting math
    return atk + extraDmg - defBlock
  }

  function attack(who){
    //Attacking Opponent
    if(who==="o"){
      //send def/atk data
      let dmgt = opp.hp-damage(opp.def, user.atk)
      //change stats
      setOpp(opp=>({...opp, hp:dmgt}))
    }
    //Attacking User
    else{
      //send def/atk data
      let dmgt = user.hp-damage(user.def, opp.atk)
      //change stats
      setUser(user=>({...user, hp:dmgt}))
    }
  }
// =======================================
  // app start
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Humanon</h1>
      <div style={{textAlign:"center"}} hidden={!(user.hp <=0 || opp.hp <=0)}>
        <h3>Game Over!</h3>
        <button onClick={()=>{window.location.reload()}}>Restart?</button>
      </div>
      <div style={container}>
        <div className="USER" style={battlerStyle}>
          <img src={userimg} alt="User" style={images}/>
          <br></br>
          <span>User HP</span>
          <Bars hp = {user.hp}/>
          ATK: {user.atk}<br></br>
          DEF: {user.def}<br></br>
          LVL: {user.lvl}<br></br>
          <button disabled={user.hp <=0 || opp.hp <=0} onClick={()=>{attack("o")}}>Attack Oppt</button>
        </div>

        <div className='OPPNT' style={battlerStyle}>
          <img src={opptimg} alt="Opponent" style={images}/>
          <br></br>
          <span>Opponent HP</span>
          <Bars hp = {opp.hp}/>
          ATK: {opp.atk}<br></br>
          DEF: {opp.def}<br></br>
          LVL: {opp.lvl}<br></br>
          <button disabled={user.hp <=0 || opp.hp <=0} onClick={()=>{attack("u")}}>Attack User</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
