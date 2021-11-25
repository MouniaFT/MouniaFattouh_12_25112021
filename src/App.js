import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import FooterSidBar from './components/FooterSidBar'

function App() {
  return (
    <Router>
      <Header />
      <FooterSidBar />
    </Router>
  )
}

export default App
