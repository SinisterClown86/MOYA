import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Waves, Menu, X, LogOut, User, Shield, ShoppingBag, Map, Gamepad2, Heart, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const { user, profile, signOut } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSignOut = async () => { await signOut(); navigate('/') }
  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/meet-us', label: 'Meet Us' },
    { path: '/map', label: 'Map', icon: Map },
    { path: '/volunteer', label: 'Volunteer', icon: Heart },
    { path: '/shop', label: 'Shop', icon: ShoppingBag },
    { path: '/games', label: 'Games', icon: Gamepad2 },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass py-3 shadow-2xl shadow-black/30' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-ocean-500/20 border border-ocean-400/30 flex items-center justify-center group-hover:bg-ocean-500/30 transition-colors">
            <Waves size={20} className="text-ocean-300" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold text-white tracking-wide">MOYA</span>
            <span className="text-ocean-400/70 text-[9px] tracking-widest uppercase">by WaterWorks</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link key={path} to={path}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive(path)
                  ? 'bg-ocean-500/20 text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}>
              {Icon && <Icon size={14} />}{label}
            </Link>
          ))}
          {profile?.is_admin && (
            <Link to="/admin"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
                isActive('/admin') ? 'bg-teal-500/20 text-teal-200' : 'text-teal-300/80 hover:bg-teal-500/10 hover:text-teal-200'
              }`}>
              <Shield size={14} />Admin
            </Link>
          )}
        </div>

        {/* Auth area */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-2">
              {profile && (
                <div className="flex items-center gap-2 glass px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span className="text-teal-300 text-sm font-mono font-medium">{profile.points ?? 0} pts</span>
                </div>
              )}
              <Link to="/profile" className="w-9 h-9 rounded-xl bg-ocean-600/40 border border-ocean-400/30 flex items-center justify-center hover:bg-ocean-500/30 transition-colors">
                <User size={17} className="text-ocean-200" />
              </Link>
              <button onClick={handleSignOut} className="w-9 h-9 rounded-xl glass flex items-center justify-center hover:bg-red-500/20 transition-colors group">
                <LogOut size={17} className="text-white/60 group-hover:text-red-400 transition-colors" />
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn-secondary py-2 px-4 text-sm">Log In</Link>
              <Link to="/signup" className="btn-primary py-2 px-4 text-sm">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden glass p-2 rounded-xl">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden glass mt-2 mx-4 rounded-2xl p-4 flex flex-col gap-1 border border-white/10">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link key={path} to={path} onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-colors ${
                isActive(path) ? 'bg-ocean-600/40 text-white' : 'text-white/70 hover:bg-white/5'
              }`}>
              {Icon && <Icon size={15} />}{label}
            </Link>
          ))}
          {profile?.is_admin && (
            <Link to="/admin" onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-teal-300 hover:bg-teal-500/10">
              <Shield size={15} />Admin Panel
            </Link>
          )}
          <div className="border-t border-white/10 mt-2 pt-2">
            {user ? (
              <div className="flex items-center justify-between px-2">
                {profile && <span className="text-teal-300 text-sm font-mono">{profile.points ?? 0} pts</span>}
                <button onClick={() => { handleSignOut(); setMenuOpen(false) }} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-red-400 hover:bg-red-500/10 text-sm">
                  <LogOut size={14} />Sign Out
                </button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="flex-1 btn-secondary text-center py-2 text-sm">Login</Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)} className="flex-1 btn-primary text-center py-2 text-sm">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}