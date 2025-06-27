import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Compteur React</h1>
      <p>Tu as cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Clique moi !</button>
    </div>
  );
}

export default App;

