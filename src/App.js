import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import FooterSidBar from './components/FooterSidBar'
import Welcome from './components/Welcome'
import ChartActivity from './components/ChartActivity'

function App() {
  return (
    <Router>
      <Header />
      <Welcome />
      <ChartActivity />
      <FooterSidBar />
    </Router>
  )
}

export default App
