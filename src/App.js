import './App.css';
import { useTimeout } from './useTimeout';

function App() {
  const ready = useTimeout(5000);
  return (
    <div className="App">
      <p>{ready ? "Ready" : "Not Ready"}</p>
    </div>
  );
}

export default App;
