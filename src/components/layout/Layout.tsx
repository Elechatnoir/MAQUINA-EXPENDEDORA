import { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col synthwave-bg">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}


