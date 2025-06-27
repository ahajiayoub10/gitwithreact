import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Compteur Reacts</h1>
      <p>Tu as cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>Clique moi !</button>
	  <button onClick={() => setCount(count + 1)}>Clique Jour !</button>
    </div>
  );
}

export default App;

