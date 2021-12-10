import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FooterSidBar from './components/FooterSidBar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/user/:id">
        <Dashboard />
      </Route>
      <FooterSidBar />
    </Router>
  )
}

export default App
