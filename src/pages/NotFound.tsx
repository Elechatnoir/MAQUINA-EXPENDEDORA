import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'

export const NotFound = () => {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Página no encontrada
        </h2>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Link to="/">
          <Button size="lg">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  )
}


