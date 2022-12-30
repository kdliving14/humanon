import Bars from './Bars';
import { useState } from 'react';

// images
import userimg from "./images/user.jpg"
import opptimg from "./images/oppt.jpg"

function App() {
// =======================================
  // starter variables & states
  const [user, setUser] = useState({
    hp: 100,
    atk: 5,
    def: 5,
    lvl: 1
  })

  const [opp, setOpp] = useState({
    hp: 100,
    atk: 5,
    def: 5,
    lvl: 1
  })

// =======================================
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
  function damage(who){
    
    //Attacker
    let atk = who==="o"? user.atk : opp.atk;

    //Defender
    let def = who==="o"? opp.def : user.def;
    
    //Extra Dmg Chance Boolean (if less than 3, no extra dmg)
    let extraChnc = Math.floor(Math.random()*(4-1))+1<3 ? false : true

    //Extra Dmg Amount
    let extraDmg = extraChnc ? Math.floor(Math.random()*6) : 0

    //Defence Chance Boolean (if less than 3, use all def)
    let defChnc = (Math.floor(Math.random()*(4-1))+1<3 ? true : false)

    //Defence Amount
    let defBlock = defChnc ? def: Math.floor(Math.random()*def)

    //resulting math
    return atk + extraDmg - defBlock
  }

  function attack(who){
    if(who==="o"){
      let dmgt = opp.hp-damage("o")
      setOpp(opp=>({...opp, hp:dmgt}))
    }
    else{
      let dmgt = user.hp-damage("u")
      setUser(user=>({...user, hp:dmgt}))
    }
  }

  // app start
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Humanon</h1>
      <div style={container}>
        <div className="USER" style={battlerStyle}>
          <img src={userimg} alt="User" style={images}/>
          <br></br>
          <span>User HP</span>
          <Bars hp = {user.hp}/>
          ATK: {user.atk}<br></br>
          DEF: {user.def}<br></br>
          LVL: {user.lvl}<br></br>
          <button onClick={()=>{attack("o")}}>DMG Oppt</button>
        </div>

        <div className='OPPNT' style={battlerStyle}>
          <img src={opptimg} alt="Opponent" style={images}/>
          <br></br>
          <span>Opponent HP</span>
          <Bars hp = {opp.hp}/>
          ATK: {opp.atk}<br></br>
          DEF: {opp.def}<br></br>
          LVL: {opp.lvl}<br></br>
          <button onClick={()=>{attack("u")}}>DMG User</button> 
        </div>
      </div>
    </div>
  );
}

export default App;
