import { BrowserRouter } from 'react-router-dom'
import { EquipeProvider } from './hooks/EquipeContext.jsx'
import { Router } from './routes'

function App() {
  return (
    <BrowserRouter>
      <EquipeProvider>
        <Router />
      </EquipeProvider>
    </BrowserRouter>
  )
}

export default App
