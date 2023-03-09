import './App.css';
import Header from './components/Header/Header';
import Map from './components/Map/Map'
import { useState } from 'react';
import LeafletMap from './components/LeafletMap/LeafletMap';
function App() {
  const [dataLoaded, setDataLoaded] = useState([])
  const HandlerFunction = (ChildToParentConst) => {
    setDataLoaded(ChildToParentConst )
    }
  return (
    <div className="App">
      <Header onSaveHandler  = {HandlerFunction}></Header>
      <Map ParentToChildData= {dataLoaded}></Map>
      {/* <LeafletMap ParentToChildData={dataLoaded}></LeafletMap> */}
    </div>
  );
}

export default App;
