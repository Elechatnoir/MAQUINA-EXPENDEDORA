# 🚀 Plantilla React con TypeScript

Una plantilla completa y moderna para proyectos React con TypeScript, Tailwind CSS y una estructura de directorios bien organizada.

## ✨ Características

- ⚡ **Vite** - Herramienta de construcción rápida
- 🔷 **TypeScript** - Tipado estático para JavaScript
- 🎨 **Tailwind CSS** - Framework de CSS utilitario
- 🧩 **React Router** - Enrutamiento del lado del cliente
- 🔄 **React Query** - Manejo de estado del servidor
- 🗃️ **Zustand** - Estado global ligero
- 📡 **Axios** - Cliente HTTP
- 🔧 **ESLint** - Linter para JavaScript/TypeScript
- 🧪 **Vitest** - Framework de testing
- 📱 **Responsive Design** - Diseño adaptable

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── layout/         # Componentes de layout (Header, Footer, Layout)
│   └── ui/             # Componentes de interfaz (Button, Card, etc.)
├── pages/              # Páginas de la aplicación
├── hooks/              # Hooks personalizados
├── services/           # Servicios y API
├── store/              # Estado global (Zustand)
├── types/              # Definiciones de tipos TypeScript
├── utils/              # Funciones utilitarias
├── assets/             # Recursos estáticos
└── main.tsx            # Punto de entrada
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd react-project-template
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   # o
   yarn install
   ```

3. **Configura las variables de entorno**
   ```bash
   cp env.example .env
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. **Abre tu navegador**
   Visita [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter
- `npm run lint:fix` - Corrige errores del linter automáticamente
- `npm run type-check` - Verifica tipos TypeScript
- `npm run test` - Ejecuta las pruebas
- `npm run test:ui` - Interfaz de usuario para pruebas
- `npm run test:coverage` - Reporte de cobertura de pruebas

## 🛠️ Configuración

### Variables de Entorno

Crea un archivo `.env` basado en `env.example`:

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=Mi App React
VITE_APP_VERSION=1.0.0
VITE_DEBUG=true
```

### Paths Absolutos

El proyecto está configurado con paths absolutos para una mejor experiencia de desarrollo:

```typescript
import { Button } from '@/components/ui/Button'
import { useAuthStore } from '@/store/useAuthStore'
import { User } from '@/types'
```

## 🎨 Personalización

### Colores

Los colores se pueden personalizar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tus colores personalizados
      }
    }
  }
}
```

### Componentes

Los componentes base están en `src/components/ui/` y pueden ser extendidos según tus necesidades.

## 📦 Dependencias Principales

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Herramienta de construcción
- **Tailwind CSS** - Framework de CSS
- **React Router** - Enrutamiento
- **React Query** - Manejo de estado del servidor
- **Zustand** - Estado global
- **Axios** - Cliente HTTP
- **Vitest** - Framework de testing

## 🧪 Testing

El proyecto incluye configuración para testing con Vitest:

```bash
# Ejecutar todas las pruebas
npm run test

# Ejecutar pruebas en modo watch
npm run test:watch

# Generar reporte de cobertura
npm run test:coverage
```

## 📝 Convenciones de Código

- Usa TypeScript para todo el código
- Sigue las reglas de ESLint configuradas
- Usa componentes funcionales con hooks
- Implementa paths absolutos para imports
- Organiza archivos por funcionalidad

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Vite](https://vitejs.dev/) - Herramienta de construcción
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [React](https://reactjs.org/) - Biblioteca de UI
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript


# MAQUINA-EXPENDEDORA
