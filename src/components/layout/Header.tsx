import { Link, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'

const navigation = [
  { name: '🏠 INICIO', href: '/' },
  { name: 'ℹ️ ACERCA', href: '/about' },
  { name: '🤖 MÁQUINA', href: '/vending-machine' },
  { name: '📚 CÓDIGO', href: '/code' },
  { name: '🔬 TEORÍA', href: '/theory' },
]

export const Header = () => {
  const location = useLocation()

  return (
    <header className="bg-black bg-opacity-90 backdrop-blur-md border-b-2 border-cyan-500 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-black neon-text transition-all duration-300 hover:neon-pink"
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              MÁQUINA
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={clsx(
                  'px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 uppercase tracking-wider',
                  location.pathname === item.href
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                    : 'text-cyan-300 hover:text-cyan-100 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400'
                )}
                style={{ fontFamily: 'Orbitron, monospace' }}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
