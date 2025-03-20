
import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { App1 } from './components/App1';
import { App2 } from './components/App2';
import { App3 } from './components/App3';
import { App4 } from './components/App4';
import { App5 } from './components/App5';
import { App6 } from './components/App6';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <Link className='app1' to="app1">App1</Link>
      <Link className='app2' to="app2">App2</Link>
      <Link className='app3' to="app3">App3</Link>
      <Link className='app4' to="app4">App4</Link>
      <Link className='app5' to="app5">App5</Link>
      <Link className='app6' to="app6">App6</Link>
    </div>
    <hr></hr>
    <div>
      <Routes>
        <Route index element={<App1/>}></Route>
        <Route path='app1' element={<App1/>}></Route>
        <Route path='app2' element={<App2/>}></Route>
        <Route path='app3' element={<App3/>}></Route>
        <Route path='app4' element={<App4/>}></Route>
        <Route path='app5' element={<App5/>}></Route>
        <Route path='app6' element={<App6/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export  {App}
