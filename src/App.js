import React, { useContext } from 'react';
import { UserContext } from './context/AgeContextProvider';


function App() {
  const{age, setAge, message, setMessage}=useContext(AgeContext)
  return (
    <div>
      <input 
      onChange={e => setAge(e.target.value)}
      placeholder="Enter age"></input>
      <p className="message">
        {message}
      </p>
    </div>
   )
  }
  

export default App;
