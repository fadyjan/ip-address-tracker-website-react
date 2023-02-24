import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map'
import { useState } from 'react';
function App() {
  const [dataLoaded, setDataLoaded] = useState([])
  const HandlerFunction  = (ChildToParentConst) => {
    setDataLoaded(ChildToParentConst )
    }
  return (
    <div className="App">
      <Header onSaveHandler  = {HandlerFunction  }></Header>
      <Map ParentToChildData= {dataLoaded}></Map>
    </div>
  );
}

export default App;
