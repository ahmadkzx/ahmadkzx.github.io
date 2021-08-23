import Home from './pages/Home'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={ Home } />
        <Footer />
      </Router>
    </div>
  )
}

export default App