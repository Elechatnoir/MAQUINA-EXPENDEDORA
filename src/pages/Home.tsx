export const Home = () => {
  return (
    <div className="synthwave-bg retro-grid min-h-screen">
      <div className="relative z-10 space-y-12 py-12">
        {/* Header principal */}
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-black neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
            MÁQUINA EXPENDEDORA
        </h1>
          <h2 className="text-3xl font-bold neon-pink" style={{ fontFamily: 'Orbitron, monospace' }}>
            AUTÓMATAS FINITOS & EXPRESIONES REGULARES
          </h2>
          <p className="text-xl text-cyan-300 max-w-4xl mx-auto leading-relaxed">
            Un proyecto innovador que combina la teoría de autómatas finitos con expresiones regulares 
            para simular el funcionamiento inteligente de una máquina expendedora del futuro.
        </p>
      </div>

        {/* Sección de conceptos teóricos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="retro-card p-8">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
              🤖 AUTÓMATAS FINITOS
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nuestra máquina expendedora utiliza un autómata finito determinista (AFD) con estados 
              que representan diferentes cantidades de dinero insertado (Q0 a Q30, representando $0 a $3000).
            </p>
            <ul className="text-sm text-cyan-200 space-y-2">
              <li>• Estados: Q0, Q1, Q2, ..., Q30</li>
              <li>• Transiciones basadas en monedas insertadas</li>
              <li>• Validación de saldo y productos</li>
              <li>• Estados de error y recuperación</li>
            </ul>
          </div>

          <div className="retro-card p-8">
            <h3 className="text-2xl font-bold text-pink-400 mb-4 neon-pink" style={{ fontFamily: 'Orbitron, monospace' }}>
              🔤 EXPRESIONES REGULARES
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Las expresiones regulares validan las entradas del usuario, incluyendo códigos de productos, 
              secuencias de monedas y patrones de interacción.
            </p>
            <ul className="text-sm text-pink-200 space-y-2">
              <li>• Validación de códigos: ^[0-9]{2}$</li>
              <li>• Patrones de monedas: ^[1-9][0-9]*$</li>
              <li>• Secuencias de entrada válidas</li>
              <li>• Filtrado de caracteres especiales</li>
            </ul>
          </div>
        </div>

        {/* Características del proyecto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="retro-card p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-cyan-400 mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
              ESTADOS DINÁMICOS
            </h4>
            <p className="text-gray-300 text-sm">
              Transiciones fluidas entre estados del autómata con validación en tiempo real
            </p>
          </div>

          <div className="retro-card p-6 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-bold text-pink-400 mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
              VALIDACIÓN INTELIGENTE
            </h4>
            <p className="text-gray-300 text-sm">
              Expresiones regulares que filtran y validan todas las entradas del usuario
            </p>
          </div>

          <div className="retro-card p-6 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h4 className="text-xl font-bold text-yellow-400 mb-3" style={{ fontFamily: 'Orbitron, monospace' }}>
              INTERFAZ RETRO
            </h4>
            <p className="text-gray-300 text-sm">
              Diseño synthwave que combina nostalgia de los 80s con tecnología moderna
            </p>
          </div>
        </div>

        {/* Sección técnica */}
        <div className="retro-card p-8">
          <h3 className="text-3xl font-bold text-center mb-8 neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
            ARQUITECTURA TÉCNICA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-cyan-400 mb-4">Autómata Finito</h4>
              <div className="bg-black bg-opacity-50 p-4 rounded border border-cyan-500">
                <code className="text-green-400 text-sm">
                  Estados: Q0 → Q30<br/>
                  Entradas: monedas (100, 200, 500, 1000)<br/>
                  Salidas: productos, cambio, mensajes<br/>
                  Transiciones: δ(Qi, moneda) → Qj
                </code>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-pink-400 mb-4">Expresiones Regulares</h4>
              <div className="bg-black bg-opacity-50 p-4 rounded border border-pink-500">
                <code className="text-green-400 text-sm">
                  Códigos: /^[0-9]{2}$/<br/>
                  Monedas: /^[1-9][0-9]*$/<br/>
                  Validación: /^[A-Za-z0-9]+$/<br/>
                  Filtrado: /[^0-9]/g
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="text-center space-y-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="retro-button px-8 py-4 rounded-lg text-lg font-bold">
              🎮 PROBAR MÁQUINA
            </button>
            <a 
              href="/code" 
              className="retro-button px-8 py-4 rounded-lg text-lg font-bold inline-block"
            >
              📚 VER CÓDIGO
            </a>
            <a 
              href="/theory" 
              className="retro-button px-8 py-4 rounded-lg text-lg font-bold inline-block"
            >
              🔬 TEORÍA
            </a>
      </div>

      <div className="text-center">
            <a 
              href="/vending-machine" 
              className="inline-block retro-button px-12 py-4 rounded-lg text-xl font-bold"
            >
              🚀 ENTRAR A LA MÁQUINA EXPENDEDORA
            </a>
          </div>
        </div>

        {/* Footer técnico */}
        <div className="text-center text-sm text-gray-400 space-y-2">
          <p>Desarrollado con React + TypeScript + Tailwind CSS</p>
          <p>Implementación de Autómatas Finitos y Expresiones Regulares</p>
          
        </div>
      </div>
    </div>
  )
}
