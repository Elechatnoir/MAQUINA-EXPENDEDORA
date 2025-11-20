import { useState } from 'react'

export const Theory = () => {
  const [activeSection, setActiveSection] = useState('automata')

  const sections = {
    automata: {
      title: '🤖 AUTÓMATAS FINITOS',
      icon: '🤖',
      content: {
        definition: {
          title: '¿Qué es un Autómata Finito?',
          content: `Un autómata finito es un modelo matemático de computación que consiste en:
          
• Un conjunto finito de estados (Q)
• Un alfabeto de entrada (Σ)
• Una función de transición (δ)
• Un estado inicial (q₀)
• Un conjunto de estados finales (F)

En nuestro proyecto, el autómata maneja estados Q0 a Q30, donde cada estado representa una cantidad específica de dinero insertado.`
        },
        components: {
          title: 'Componentes del Autómata',
          content: `**Estados (Q):** Q0, Q1, Q2, ..., Q30
- Q0 = $0 (estado inicial)
- Q1 = $100
- Q2 = $200
- ...
- Q30 = $3000 (estado máximo)

**Alfabeto (Σ):** {100, 200, 500, 1000}
- Representa las monedas válidas

**Función de Transición (δ):**
δ(Qi, moneda) → Qj
- Ejemplo: δ(Q0, 100) → Q1`
        },
        example: {
          title: 'Ejemplo Práctico',
          content: `**Secuencia de Transiciones:**
1. Estado inicial: Q0 ($0)
2. Insertar $100: Q0 → Q1 ($100)
3. Insertar $200: Q1 → Q3 ($300)
4. Insertar $500: Q3 → Q8 ($800)

**Validación:**
- Si el saldo excede $3000 → Estado de ERROR
- Si se selecciona producto → Verificar saldo suficiente`
        }
      }
    },
    regex: {
      title: '🔤 EXPRESIONES REGULARES',
      icon: '🔤',
      content: {
        definition: {
          title: '¿Qué son las Expresiones Regulares?',
          content: `Las expresiones regulares (regex) son patrones que describen secuencias de caracteres. Son fundamentales para:

• Validación de entrada
• Filtrado de datos
• Búsqueda de patrones
• Sanitización de texto

En nuestro proyecto, las regex validan códigos de productos, monedas y secuencias de entrada.`
        },
        patterns: {
          title: 'Patrones Utilizados',
          content: `**Códigos de Productos:** /^[0-9]{2}$/
- Exactamente 2 dígitos
- Solo números del 0-9

**Valores de Monedas:** /^[1-9][0-9]*$/
- Comienza con 1-9
- Seguido de cualquier cantidad de dígitos

**Solo Números:** /^[0-9]+$/
- Una o más cifras
- Sin caracteres especiales

**Alfanumérico:** /^[A-Za-z0-9]+$/
- Letras y números
- Sin espacios ni símbolos`
        },
        examples: {
          title: 'Ejemplos de Validación',
          content: `**Códigos Válidos:** "11", "25", "99"
**Códigos Inválidos:** "1", "123", "AB", "1A"

**Monedas Válidas:** "100", "200", "1000"
**Monedas Inválidas:** "0", "050", "ABC"

**Filtrado:** "A1B2C3" → "123"
**Sanitización:** "Hola123!" → "123"`
        }
      }
    },
    implementation: {
      title: '⚡ IMPLEMENTACIÓN',
      icon: '⚡',
      content: {
        architecture: {
          title: 'Arquitectura del Sistema',
          content: `**1. Capa de Validación:**
- Expresiones regulares filtran entrada
- Autómata valida secuencias
- Estados controlan flujo

**2. Capa de Procesamiento:**
- Transiciones de estado
- Cálculo de saldo
- Validación de productos

**3. Capa de Presentación:**
- Interfaz de usuario
- Retroalimentación visual
- Log de transiciones`
        },
        flow: {
          title: 'Flujo de Procesamiento',
          content: `**Entrada del Usuario:**
1. Usuario inserta moneda
2. Regex valida formato
3. Autómata procesa transición
4. Estado se actualiza
5. Interfaz se actualiza

**Selección de Producto:**
1. Usuario ingresa código
2. Regex valida código
3. Autómata verifica saldo
4. Producto se dispensa o error`
        },
        benefits: {
          title: 'Beneficios de esta Implementación',
          content: `**Robustez:**
- Validación en múltiples capas
- Manejo de errores consistente
- Estados bien definidos

**Mantenibilidad:**
- Código modular
- Separación de responsabilidades
- Fácil extensión

**Usabilidad:**
- Validación en tiempo real
- Mensajes de error claros
- Interfaz intuitiva`
        }
      }
    },
    examples: {
      title: '🎯 EJEMPLOS PRÁCTICOS',
      icon: '🎯',
      content: {
        scenario1: {
          title: 'Escenario 1: Compra Exitosa',
          content: `**Entrada:** Usuario inserta $500, luego $200, selecciona producto "11" ($1500)

**Procesamiento:**
1. Q0 → Q5 (insertar $500)
2. Q5 → Q7 (insertar $200)
3. Validar código "11" ✓
4. Verificar saldo $700 < $1500 ✗
5. Mostrar: "Saldo insuficiente"

**Resultado:** Transición fallida, usuario debe insertar más dinero`
        },
        scenario2: {
          title: 'Escenario 2: Validación de Entrada',
          content: `**Entrada:** Usuario intenta insertar "ABC"

**Procesamiento:**
1. Regex /^[1-9][0-9]*$/ evalúa "ABC"
2. Resultado: false
3. Mostrar: "Entrada inválida"
4. Estado permanece sin cambios

**Resultado:** Entrada rechazada, autómata no cambia de estado`
        },
        scenario3: {
          title: 'Escenario 3: Código Inválido',
          content: `**Entrada:** Usuario selecciona "1A"

**Procesamiento:**
1. Regex /^[0-9]{2}$/ evalúa "1A"
2. Resultado: false
3. Mostrar: "Código inválido"
4. Solicitar nuevo código

**Resultado:** Código rechazado, solicitar entrada válida`
        }
      }
    }
  }

  const sectionTabs = [
    { id: 'automata', label: '🤖 Autómatas', icon: '🤖' },
    { id: 'regex', label: '🔤 Regex', icon: '🔤' },
    { id: 'implementation', label: '⚡ Implementación', icon: '⚡' },
    { id: 'examples', label: '🎯 Ejemplos', icon: '🎯' }
  ]

  return (
    <div className="synthwave-bg retro-grid min-h-screen">
      <div className="relative z-10 space-y-8 py-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-black neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
            TEORÍA FUNDAMENTAL
          </h1>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
            Conceptos teóricos de Autómatas Finitos y Expresiones Regulares aplicados en nuestro proyecto
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {sectionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 ${
                activeSection === tab.id
                  ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-black bg-opacity-50 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/20'
              }`}
              style={{ fontFamily: 'Orbitron, monospace' }}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div className="retro-card p-8">
            <h2 className="text-3xl font-bold text-center mb-8 neon-text" style={{ fontFamily: 'Orbitron, monospace' }}>
              {sections[activeSection as keyof typeof sections].title}
            </h2>

            <div className="space-y-8">
              {Object.entries(sections[activeSection as keyof typeof sections].content).map(([key, section]) => (
                <div key={key} className="retro-card p-6">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                    {section.title}
                  </h3>
                  <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="retro-card p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                📚 CONCEPTOS CLAVE
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Estados y Transiciones</li>
                <li>• Alfabetos de Entrada</li>
                <li>• Patrones de Validación</li>
                <li>• Manejo de Errores</li>
              </ul>
            </div>

            <div className="retro-card p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4" style={{ fontFamily: 'Orbitron, monospace' }}>
                🎯 APLICACIONES
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Validación de Formularios</li>
                <li>• Procesamiento de Texto</li>
                <li>• Sistemas de Estado</li>
                <li>• Filtrado de Datos</li>
              </ul>
            </div>
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
