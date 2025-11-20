import { Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { VendingMachinePage } from '@/pages/VendingMachine'
import { Code } from '@/pages/Code'
import { Theory } from '@/pages/Theory'
import { NotFound } from '@/pages/NotFound'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vending-machine" element={<VendingMachinePage />} />
        <Route path="/code" element={<Code />} />
        <Route path="/theory" element={<Theory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}

export default App
