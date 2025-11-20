import { useState } from 'react'
import { Card, CardHeader, CardTitle } from '@/components/ui/Card'

export const Code = () => {
  const [activeTab, setActiveTab] = useState('automata')

  const codeSnippets = {
    automata: {
      title: '🤖 Autómata Finito',
      description: 'Implementación del autómata finito determinista',
      code: `// Estados del autómata (Q0 a Q30)
const [state, setState] = useState('Q0');
const [balance, setBalance] = useState(0);

// Función de transición del autómata
const processCoin = (coinValue: number) => {
  const currentBalance = balance + coinValue;
  
  if (currentBalance > MAX_BALANCE) {
    setMessage('Saldo máximo excedido');
    return;
  }
  
  // Actualizar estado del autómata
  const newState = \`Q\${Math.floor(currentBalance / 100)}\`;
  setState(newState);
  setBalance(currentBalance);
  
  // Log de transición
  setTransitionLog(prev => [...prev, {
    from: state,
    input: coinValue.toString(),
    to: newState,
    time: Date.now()
  }]);
};`
    },
    regex: {
      title: '🔤 Expresiones Regulares',
      description: 'Validación con expresiones regulares',
      code: `// Validación de códigos de productos
const validateProductCode = (code: string): boolean => {
  const productCodeRegex = /^[0-9]{2}$/;
  return productCodeRegex.test(code);
};

// Validación de entrada de monedas
const validateCoinInput = (input: string): boolean => {
  const coinRegex = /^[1-9][0-9]*$/;
  return coinRegex.test(input);
};

// Filtrado de caracteres especiales
const sanitizeInput = (input: string): string => {
  return input.replace(/[^0-9]/g, '');
};

// Validación de secuencia de entrada
const validateInputSequence = (sequence: string): boolean => {
  const sequenceRegex = /^[0-9]+$/;
  return sequenceRegex.test(sequence);
};`
    },
    states: {
      title: '⚡ Gestión de Estados',
      description: 'Manejo de estados y transiciones',
      code: `// Definición de estados del autómata
interface AutomataState {
  currentState: string;
  balance: number;
  message: string;
  selectedProduct: Product | null;
  dispensing: boolean;
}

// Función de transición de estados
const transitionState = (currentState: string, input: string): string => {
  const stateMap: { [key: string]: { [key: string]: string } } = {
    'Q0': { '100': 'Q1', '200': 'Q2', '500': 'Q5', '1000': 'Q10' },
    'Q1': { '100': 'Q2', '200': 'Q3', '500': 'Q6', '1000': 'Q11' },
    // ... más transiciones
  };
  
  return stateMap[currentState]?.[input] || 'ERROR';
};

// Validación de estado final
const isFinalState = (state: string): boolean => {
  const finalStates = ['Q15', 'Q20', 'Q25', 'Q30'];
  return finalStates.includes(state);
};`
    },
    validation: {
      title: '🎯 Validación y Filtrado',
      description: 'Sistema de validación completo',
      code: `// Clase de validación con expresiones regulares
class InputValidator {
  private static readonly PATTERNS = {
    PRODUCT_CODE: /^[0-9]{2}$/,
    COIN_VALUE: /^[1-9][0-9]*$/,
    ALPHANUMERIC: /^[A-Za-z0-9]+$/,
    NUMERIC_ONLY: /^[0-9]+$/
  };

  static validateProductCode(code: string): boolean {
    return this.PATTERNS.PRODUCT_CODE.test(code);
  }

  static validateCoinInput(input: string): boolean {
    return this.PATTERNS.COIN_VALUE.test(input);
  }

  static sanitizeInput(input: string): string {
    return input.replace(/[^0-9]/g, '');
  }

  static validateSequence(sequence: string): boolean {
    return this.PATTERNS.NUMERIC_ONLY.test(sequence);
  }
}`
    }
  }

  const tabs = [
    { id: 'automata', label: '🤖 Autómata', icon: '🤖' },
    { id: 'regex', label: '🔤 Regex', icon: '🔤' },
    { id: 'states', label: '⚡ Estados', icon: '⚡' },
    { id: 'validation', label: '🎯 Validación', icon: '🎯' }
  ]

  return (
    <div className="synthwave-bg retro-grid min-h-screen">
      <div className="relative z-10 space-y-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
            CÓDIGO FUENTE
          </h1>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
            Implementación completa del autómata finito y expresiones regulares
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-black bg-opacity-50 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20'
              }`}
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Code Display */}
        <div className="retro-card p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-cyan-400 mb-2" style={{ fontFamily: 'Orbitron, monospace' }}>
              {codeSnippets[activeTab as keyof typeof codeSnippets].title}
            </h2>
            <p className="text-gray-300 text-lg">
              {codeSnippets[activeTab as keyof typeof codeSnippets].description}
            </p>
          </div>

          <div className="bg-black bg-opacity-90 rounded-lg p-6 border border-cyan-500 overflow-x-auto">
            <pre className="text-green-400 text-sm leading-relaxed font-mono">
              <code>{codeSnippets[activeTab as keyof typeof codeSnippets].code}</code>
            </pre>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="retro-card p-6">
            <h3 className="text-xl font-bold text-pink-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              🔧 TECNOLOGÍAS
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• React + TypeScript</li>
              <li>• Autómatas Finitos Deterministas</li>
              <li>• Expresiones Regulares</li>
              <li>• Validación en Tiempo Real</li>
            </ul>
          </div>

          <div className="retro-card p-6">
            <h3 className="text-xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
              🎯 CARACTERÍSTICAS
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Estados Q0-Q30</li>
              <li>• Validación de Entrada</li>
              <li>• Filtrado de Caracteres</li>
              <li>• Log de Transiciones</li>
            </ul>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <a 
            href="/" 
            className="retro-button px-8 py-4 rounded-lg text-lg font-bold inline-block"
          >
            🏠 VOLVER AL INICIO
          </a>
        </div>
      </div>
    </div>
  )
}
