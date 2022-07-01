import './App.css';
import useFetch from './useFetch';
import { useTimeout } from './useTimeout';

function App() {
  const [loading,error,info] = useFetch("https://reqres.in/api/users?page=2");
  const ready = useTimeout(5000);
  const ready1 = useTimeout(1500);
  return (
    <div className="App">
      <p>{ready ? "Ready" : "Not Ready"}</p>
      <p>{ready1 ? "Ready" : "Not Ready"}</p>
      <div>
        <p>{loading ? "Loading ....." : null}</p>
        <div>{info?.length> 0 && (
          info.map((item)=> {
          return  (<div>
              <img src={item.avatar} alt={item.first_name}/>
              <p>
                {item.first_name}
              </p>
            </div>
          )
          })
        )}</div>
      </div>
    </div>
  );
}

export default App;
