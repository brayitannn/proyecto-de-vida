import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'

export function Login() {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)
  const { signIn, signUp } = useAuthContext()

  const handleAuth = async (type: 'login' | 'register') => {
    if (!email || !password) return
    setLoading(true)
    try {
      if (type === 'login') await signIn(email, password)
      else await signUp(email, password)
    } catch (err: any) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h2>Bienvenido</h2>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
      />
      <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
        <button onClick={() => handleAuth('login')} disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </button>
        <button onClick={() => handleAuth('register')} disabled={loading}>
          Registrarse
        </button>
      </div>
    </div>
  )
}