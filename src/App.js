import HomePage from './pages/Home'
import PostPage from './pages/Post'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/post/:id/:slug" component={ PostPage } />
        <Footer />
      </Router>
    </div>
  )
}

export default App