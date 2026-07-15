import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/auth/Login'
import Register from './pages/auth/Login'

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
