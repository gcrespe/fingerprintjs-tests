import logo from './logo.svg';
import './App.css';
import {useVisitorData} from '@fingerprintjs/fingerprintjs-pro-react'

function App() {

  const {isLoading, error, data, getData} = useVisitorData(
    {extendedResult: true},
    {immediate: true}
  )

  return (
    <div>
      <button onClick={() => getData({ignoreCache: true})}>
        Reload data
      </button>
      <p id="visitorId">{data?.visitorId}</p>
      <p id="visitorData">{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}

export default App;
