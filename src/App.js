import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import ReactForm from './Pages/ReactForm/ReactForm';
import Shop from './Pages/Shop/Shop';
import AdminTemplate from './Templates/AdminTemplate';
import Users from './Pages/Admin/Users/Users';
import Products from './Pages/Admin/Products/Products';

import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";

import { createBrowserHistory } from "history";
import Detail from './Pages/Detail/Detail';
import Search from './Pages/Search/Search';
import DemoSearch from './Pages/DemoSearch/DemoSearch';


//Chuyển hướng được ở 1 file không phải là function component
export const history = createBrowserHistory({ window });


function App() {

  return (
    <HistoryRouter history={history}>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route index path='' element={<Home />} ></Route>
            <Route path='home' element={<Home />} ></Route>
            <Route path='form' element={<ReactForm />}></Route>
            <Route path='shop' element={<Shop />}></Route>
            <Route path='search' element={<Search />}></Route>
            <Route path='search-demo' element={<DemoSearch />}></Route>
            
            <Route path='detail'>
              <Route path=':id' element={<Detail />}></Route>
            </Route>


            <Route path='*' element={<Navigate to={''} />} ></Route>
            
          </Route>

          <Route path='admin' element={<AdminTemplate />}>
              <Route path='users' element={<Users />} />
              <Route path='products' element={<Products />} />

          </Route>
   
        </Routes>
    </HistoryRouter>
  );
}

export default App;
