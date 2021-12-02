import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import FooterSidBar from './components/FooterSidBar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Header />
      <Dashboard />
      <FooterSidBar />
    </Router>
  )
}

export default App
