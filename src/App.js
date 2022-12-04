import { useState } from 'react';
import './App.css';
import Header from './Header/Header';

function App() {
  // const [arr,setArr] = useState(["asdas dasd aspod maspod paso", "asdmaposdmpasomd", "gpsdomgps dpgsmg", "asdmaspodmpoa asdas", "dapms paspo maspo aspm"])
  const arr = ["asdas dasd aspod maspod paso", "asdmaposdmpasomd", "gpsdomgps dpgsmg", "asdmaspodmpoa asdas", "dapms paspo maspo aspm"]
  return (
    <div className="App">
      <div className='container'>
        <div className='wrapper'>
          {
            arr.map((el) => (
              <Header text={el} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
