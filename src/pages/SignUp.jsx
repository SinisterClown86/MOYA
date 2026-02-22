import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Droplets, Eye, EyeOff, CheckCircle, User, Mail, Lock } from 'lucide-react'

export default function SignUp() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    if (!form.name.trim()) return 'Full name is required'
    if (!form.email.includes('@')) return 'Valid email required'
    if (form.password.length < 8) return 'Password must be at least 8 characters'
    if (form.password !== form.confirm) return 'Passwords do not match'
    return null
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const err = validate()
    if (err) { setError(err); return }
    setError('')
    setLoading(true)
    const { error: signUpError } = await signUp(form.email, form.password, form.name)
    if (signUpError) {
      setError(signUpError.message)
    } else {
      setSuccess(true)
      setTimeout(() => navigate('/login'), 3000)
    }
    setLoading(false)
  }

  const strength = () => {
    const p = form.password
    if (!p) return 0
    let score = 0
    if (p.length >= 8) score++
    if (/[A-Z]/.test(p)) score++
    if (/[0-9]/.test(p)) score++
    if (/[^A-Za-z0-9]/.test(p)) score++
    return score
  }

  const strengthColors = ['', 'bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-teal-400']
  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong']
  const s = strength()

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="card p-12 max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-teal-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-teal-300" />
          </div>
          <h2 className="font-display text-3xl font-bold text-white mb-3">Account Created!</h2>
          <p className="text-white/60 mb-4">Check your email to confirm your account. Redirecting to login...</p>
          <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
            <div className="h-full bg-teal-400 rounded-full animate-[width_3s_linear]" style={{ width: '100%', transition: 'width 3s linear' }} />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-ocean-500/20 border border-ocean-400/30 flex items-center justify-center mx-auto mb-4">
            <Droplets size={28} className="text-ocean-300" />
          </div>
          <h1 className="font-display text-4xl font-bold text-white mb-2">Join AquaWatch</h1>
          <p className="text-white/50">Create your account and start making a difference</p>
        </div>

        <form onSubmit={handleSubmit} className="card p-8 flex flex-col gap-5">
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="text-sm text-white/60 font-medium">Full Name</label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name"
                className="input-field pl-11" required />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-white/60 font-medium">Email Address</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com"
                className="input-field pl-11" required />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-white/60 font-medium">Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input name="password" type={showPass ? 'text' : 'password'} value={form.password} onChange={handleChange}
                placeholder="At least 8 characters" className="input-field pl-11 pr-11" required />
              <button type="button" onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70">
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {form.password && (
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-1 flex-1">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${i <= s ? strengthColors[s] : 'bg-white/10'}`} />
                  ))}
                </div>
                <span className={`text-xs font-medium ${s >= 3 ? 'text-teal-400' : s >= 2 ? 'text-yellow-400' : 'text-red-400'}`}>
                  {strengthLabels[s]}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm text-white/60 font-medium">Confirm Password</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
              <input name="confirm" type="password" value={form.confirm} onChange={handleChange}
                placeholder="Repeat your password" className="input-field pl-11" required />
              {form.confirm && form.confirm === form.password && (
                <CheckCircle size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-teal-400" />
              )}
            </div>
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 mt-1 flex items-center justify-center gap-2">
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating account...
              </>
            ) : 'Create Account'}
          </button>

          <p className="text-center text-white/50 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-ocean-300 hover:text-ocean-200 font-medium transition-colors">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
