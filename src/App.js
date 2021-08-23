import Home from './pages/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route exact path="/" component={ Home } />
      </Router>
    </div>
  )
}

export default App