import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { PrivateRoute } from './components/PrivateRoute'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* rutas publicas */}
          <Route path='/login' element={<Login/>} />
          
          
          {/* rutas protegidas - requieren sesion activa */}
          <Route element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App