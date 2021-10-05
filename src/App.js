import NavBar from "./Components/NavBar";
import './App.css';
import React, { useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <section>
        <NavBar pedidos={count}/>
      </section>
      <section >
                
                <a class="waves-effect waves-light btn" onClick={() => setCount(count + 1)}>Add to cart</a>
                <a class="waves-effect waves-light btn" onClick={() => setCount(count - 1)}>Delete</a>
            </section>
    </div>
  );
}

export default App;
