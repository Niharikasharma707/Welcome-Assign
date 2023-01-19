
import './App.css';
import {Welcome} from './component/Welcome.js'
import {useState} from 'react';



function App() {
  const [name, setName] = useState ("")
  const [data, setData] = useState(false)
  return (
   
        <div>
          <div>
            <label> Enter Name :</label>
            <input type = "string" onChange={(event)=> {setName(event.target.value)}}></input>
            <button onClick={()=>{setData(true)}}>Submit</button>
           {
            data ? <Welcome studentName ={name}></Welcome> : null
           }
            </div>
            <div> 
              <h3>Niharika Sharma(12005467)</h3>

            </div>
            </div>

      );
    }
   
      
export default App;
