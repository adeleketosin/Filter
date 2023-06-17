import Header from './Header';
import Filter from './Filter'
import Data from '../src/static-job-listings-master/data.json';
import './App.css';


function App() {
  const info = Data.map((list) => {
    return(
      <Filter
        key = {list.id}
        {...list}
      />
  )})
  
  return (
    <div className="App">
      <Header />
      {info}
    </div>
  );
}

export default App;
