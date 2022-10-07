import Main from './components/Main'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome'
// import Dummy from './components/Dummy';
import Photos from './components/Photos'
function App() {
  return (
    <div className="App ">
      {/* <BrowserRouter> */}  
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="user" element={<Main/>}/>
        <Route path="user/:id/photos" element={<Photos/>}/>
      </Routes>
      {/* <Photos/> */}
      {/* </BrowserRouter> */}
      
    </div>
  );
}

export default App;
