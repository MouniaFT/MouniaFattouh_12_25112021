import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import FooterSidBar from './components/FooterSidBar'
import Welcome from './components/Welcome'

function App() {
  return (
    <Router>
      <Header />
      <Welcome />
      <FooterSidBar />
    </Router>
  )
}

export default App
