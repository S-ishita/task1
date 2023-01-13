
import './App.css';
import { useState } from 'react';
import img from './cover.png';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'

function App() {

    const [type,setType]=useState('password');
    const [icon,setIcon]=useState(eyeOff);

    const handleToggle=()=>{
      if(type==='password'){
        setIcon(eye);
        setType('text');
      }
      else{
        setIcon(eyeOff);
        setType('password');
      }
    }

  return (
    <div className="cover">
   
       <img className="imgpic" src={img} alt="cover"></img>
    
  <div className="login">
   
            <p>Welcome to Cloudcast</p>
            <h1>Log in</h1>
            <p>Enter your username or email address</p>
            <input type="text" name="email"  placeholder="alison@cloudcast.com"></input>
            <p>Enter your Password</p>
            <div className="wrapper">
              <input type={type} name="password" placeholder="**********" ></input>
            <span onClick={handleToggle}> <div style={{ color: "#dddfe3" }}><Icon icon={icon} size={20}></Icon></div></span>
            </div>
            
            <div>
            <button type="button" class="button1">Forgot Password</button>
            </div>
            <button type="button" class="button">Log in</button>
        </div>
        
        </div>
  );
}

export default App;
