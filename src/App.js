
import Dashboard from "./component/Dashboard"
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
  <>
  <Routes>
    <Route exact path="/" element={<Dashboard />} />
    
  </Routes>
  </>
  
  );
}

export default App;
