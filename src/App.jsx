import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import LoginScreen from './Admin/LoginScreen'
import RegisterScreen from './Admin/RegisterScreen'
import HomeScreen from './Admin/HomeScreen'
import Product from './Shop/Product'
import NewProduct from './Shop/NewProduct'
import Premium from './Shop/Premium'
import Recommend from './Shop/Recommend'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
<Routes><Route  path='/' element={<LoginScreen/>}/>
<Route path='/register' element={<RegisterScreen/>}/>
<Route path='/admin' element={<HomeScreen/>}/>
<Route path='/mainpage' element={<Product/>}/>
<Route path='/newProducts' element={<NewProduct/>}/>
<Route path='/Premium' element={<Premium/>}/>
<Route path='/Recommended' element={<Recommend/>}/>
 </Routes>


</>
  )
}

export default App
