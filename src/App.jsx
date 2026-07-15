import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './redux/store'

// pages
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Login'

// import tailwindcss from "@tailwindcss/vite";
import './App.css'
import "./index.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/auth/login' element={<Login/>}></Route>
          <Route path='/auth/register' element={<Register/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App
