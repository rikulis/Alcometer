import { useState } from'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(90);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);
  const [time, setTime] = useState(1);
  const [bottles, SetBottles] = useState(0);
  
  function handleSubmit(e) {
      e.preventDefault();
      let calories = 0;


      if (gender === "male") {
          calories = (((bottles * 0.33)* 8 * 4.5) -(8.9 * time)) / (weight * 0.7);
      }
       else {
          calories = (((bottles * 0.33)* 8 * 4.5) -(8.9 * time)) / (weight * 0.6);
      } 
      if (calories < 0) {
         calories = 0; 
         setResult(calories)
      } else {
      setResult(calories)
    }
  }
  
  
      return (
          <>
          <h3>Alcometer</h3>
          <form onSubmit={handleSubmit}>
              <div>
                  <label>Weight</label>
                  <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
              </div>
              <div>
                 
                  <div>
                    <label>Bottles</label>
                    <select type="number" name="bottles" value={bottles} onChange={e => SetBottles(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                  </div>
                  <div>
                    <label>Time</label>
                    <select type="number" name="time" value={time} onChange={e => setTime(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                  </div>
              </div>
              <div>
                  <label>Gender</label>
                  <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
                  <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>female</label>
              </div>
              <div>
                  <output>{result.toFixed(3)}</output>
              </div>
              <button>Calculate</button>
          </form>
          </>
      );
  }

export default App;
