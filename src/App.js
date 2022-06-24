import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import ReactForm from './Pages/ReactForm/ReactForm';
import Shop from './Pages/Shop/Shop';

function App() {

  return (
    <BrowserRouter>
        <Routes >
          <Route path='' element={<HomeTemplate />}>
            <Route index path='' element={<Home />} ></Route>
            <Route path='home' element={<Home />} ></Route>
            <Route path='form' element={<ReactForm />}></Route>
            <Route path='shop' element={<Shop />}></Route>
            <Route path='*' element={<Navigate to={''} />} ></Route>
          </Route>
          {/* <Route path='admin' element={}>

          </Route> */}
        </Routes>
    </BrowserRouter>
  );
}

export default App;
