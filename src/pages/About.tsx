import { Card, CardHeader, CardTitle } from '@/components/ui/Card'

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Acerca de este Proyecto
        </h1>
        <p className="text-xl text-gray-600">
          Una plantilla completa y moderna para proyectos React
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>📁 Estructura Organizada</CardTitle>
          </CardHeader>
          <ul className="text-gray-600 space-y-2">
            <li>• Componentes separados por funcionalidad</li>
            <li>• Hooks personalizados</li>
            <li>• Servicios y utilidades</li>
            <li>• Tipos TypeScript centralizados</li>
          </ul>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🛠️ Herramientas Incluidas</CardTitle>
          </CardHeader>
          <ul className="text-gray-600 space-y-2">
            <li>• Vite para desarrollo rápido</li>
            <li>• TypeScript para tipado</li>
            <li>• Tailwind CSS para estilos</li>
            <li>• ESLint para calidad de código</li>
          </ul>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📦 Dependencias Principales</CardTitle>
          </CardHeader>
          <ul className="text-gray-600 space-y-2">
            <li>• React Router para navegación</li>
            <li>• React Query para estado del servidor</li>
            <li>• Zustand para estado global</li>
            <li>• Axios para peticiones HTTP</li>
          </ul>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎯 Características</CardTitle>
          </CardHeader>
          <ul className="text-gray-600 space-y-2">
            <li>• Configuración de paths absolutos</li>
            <li>• Componentes UI reutilizables</li>
            <li>• Layout responsive</li>
            <li>• Estructura escalable</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}


