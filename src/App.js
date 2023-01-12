
import './App.css';
import img from './cover.png';

function App() {
  return (
    <div className="cover">
   
       <img className="imgpic" src={img} alt="cover"></img>
    
  <div className="login">
   
            <p>Welcome to Cloudcast</p>
            <h1>Log in</h1>
            <p>Enter your username or email address</p>
            <input type="text" name="email"  placeholder="alison@cloudcast.com"></input>
            <p>Enter your Password</p>
            <input type="password" name="password" placeholder="**********" ></input>
            <div>
            <button type="button" class="button1">Forgot Password</button>
            </div>
            <button type="button" class="button">Log in</button>
        </div>
        
        </div>
  );
}

export default App;
