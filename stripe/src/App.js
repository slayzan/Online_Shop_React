import Pay from './modules/Pay';
import Sucess from './modules/Sucess';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path='/pay' element={<Pay/>} />
      <Route path='/sucess' element={<Sucess/>} />
      </Routes>
    </Router>
  );
};

export default App;
