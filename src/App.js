// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import { useSelector,useDispatch} from 'react-redux'
// import { increment,decrement } from './redux/slice'
import User from './components/User';
function App() {

  return (
    <div className="App">
      <h1>Hey it's me</h1>
      <User/>
    </div>
  );
}

export default App;
