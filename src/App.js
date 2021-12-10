import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FooterSidBar from './components/FooterSidBar'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/user/:id">
        <Dashboard />
      </Route>
      <FooterSidBar />
    </Router>
  )
}

export default App
