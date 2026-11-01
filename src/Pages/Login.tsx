import React from 'react'
import { _login } from '../data-services/user';
import useAuth from '../hooks/useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  console.log(email);

  const handleLogin = async (e: any) => {
    e.preventDefault()
    try {
      const response = await _login(email, password);
      const user = response.data.userExists
      const token = response.data.token
      if (response.status === true) {
        console.log("here");
        
        login(user, token);
        navigate('/admin/dashboard')
      } else {
        setError(response.error)
      }
    } catch {
      toast.error(error)
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-[400px]">

        <div className="eyebrow mb-8">Admin Access</div>

        <div className="titleblock">
          <div className="sheet-num mb-2">SECURE LOGIN</div>
          <div className="font-display text-[26px] font-semibold mb-8">
            Portfolio <span className="text-[var(--cyan)]">Dashboard</span>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-dim)]">Email</label>
              <input id="email" type="email" placeholder="admin@rahil.dev"
                className="w-full bg-[var(--bg)] border border-[var(--line-strong)] rounded-sm px-3.5 py-2.5 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--cyan)] transition-colors"
                onChange={(e: any) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-mono text-[10px] tracking-widest uppercase text-[var(--text-dim)]">Password</label>
              <input id="password" type="password" placeholder="••••••••"
                className="w-full bg-[var(--bg)] border border-[var(--line-strong)] rounded-sm px-3.5 py-2.5 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--cyan)] transition-colors"
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary w-full justify-center mt-2">Sign in →</button>
          </form>
        </div>

        <div className="text-center mt-5 font-mono text-[11px]">
          <a href="/" className="text-[var(--cyan)]">← Back to portfolio</a>
        </div>

      </div>
    </div>
  )
}

export default Login