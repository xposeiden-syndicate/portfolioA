
import './App.css'
// ROUTER
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// PAGES
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About'
import Projects from './pages/Projects.jsx'


function App() {
  
  return (

      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    
  )
}

export default App
