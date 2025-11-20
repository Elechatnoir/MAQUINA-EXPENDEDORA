export const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 backdrop-blur-md border-t-2 border-cyan-500">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="neon-text text-lg font-bold" style={{ fontFamily: 'Orbitron, monospace' }}>
            MÁQUINA EXPENDEDORA
          </div>
          <p className="text-cyan-300 text-sm">
            Proyecto Académico - Autómatas Finitos & Expresiones Regulares
          </p>
          <p className="text-gray-400 text-xs">
            &copy; 2025 Desarrollado con React + TypeScript + Tailwind CSS
          </p>
          <div className="flex justify-center space-x-4 text-cyan-400">
            <span className="text-xs">🤖 Autómatas</span>
            <span className="text-xs">🔤 Regex</span>
            <span className="text-xs">⚡ React</span>
            <span className="text-xs">🎨 Synthwave</span>
          </div>
        </div>
      </div>
    </footer>
  )
}


