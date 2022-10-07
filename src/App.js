import Main from './components/Main'
import { Routes,Route} from 'react-router-dom';
import Welcome from './components/Welcome'
import Photos from './components/Photos'
import CreateModal from './components/CreateModal';
function App() {
  return (
    <div className="App ">
 
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="user" element={<Main/>}/>
        <Route path="user/:id/photos" element={<Photos/>}/>
      </Routes>
      {/* <CreateModal/> */}
      
    </div>
  );
}

export default App;
