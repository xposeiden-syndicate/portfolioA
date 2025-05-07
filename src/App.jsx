
import './App.css'
// ROUTER
import { HashRouter as Router,Routes,Route} from 'react-router-dom'
// PAGES
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About'
import Projects from './pages/Projects.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  
  return (

      <Router>
        <div className='bg-white min-h-screen'><picture>
          <source srcset="" type="image/" />
          <img src="" alt="" />
        </picture>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </Router>
    
  )
}

export default App
