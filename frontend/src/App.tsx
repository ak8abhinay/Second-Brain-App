import './App.css'
import { Signin } from './pages/Signin';
import { Signup } from "./pages/Signup";
import { Dashboard } from './pages/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/signin' element={<Signin />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
    </Routes>
  </BrowserRouter>
}
 
//to connect FE-BE :

//react-hook-forms
//react-query
//swr

export default App

