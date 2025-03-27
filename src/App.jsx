
import './App.css'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { App1 } from './components/App1';
import { App2 } from './components/App2';
import { App3 } from './components/App3';
import { App4 } from './components/App4';
import { App5 } from './components/App5';
import { App6 } from './components/App6';
import { App7 } from './components/App7';
import { App8 } from './components/App8';
import { App9 } from './components/App9';
import { App10 } from './components/App10';
import { App11 } from './components/App11';
import { App12 } from './components/App12';
import { App13 } from './components/App13';
import { App14 } from './components/App14';
import { App15 } from './components/App15';
import { Child1 } from './components/Child1';
import { Child2 } from './components/Child2';

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
      <Link className='app7' to="app7">App7</Link>
      <Link className='app8' to="app8">App8</Link>
      <Link className='app9' to="app9">App9</Link>
      <Link className='app10' to="app10">App10</Link>
      <Link className='app11' to="app11">App11</Link>
      <Link className='app12' to="app12">App12</Link>
      <Link className='app13' to="app13">App13</Link>
      <Link className='app14' to="app14">App14</Link>
      <Link className='app15' to="app15">App15</Link>
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
        <Route path='app7' element={<App7/>}></Route>
        <Route path='app8' element={<App8/>}></Route>
        <Route path='app9' element={<App9/>}></Route>
        <Route path='app10' element={<App10/>}></Route>
        <Route path='app11' element={<App11/>}></Route>
        <Route path='app12' element={<App12/>}></Route>
        <Route path='app13' element={<App13/>}></Route>
        <Route path='app14' element={<App14/>}></Route>
        <Route path='app15' element={<App15/>}></Route>
        <Route path='/child1' element={<Child1/>}></Route>
        <Route path='/child2' element={<Child2/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export  {App}
