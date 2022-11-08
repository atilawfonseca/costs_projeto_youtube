import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbars from './components/layout/Navbars';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NewProject from './pages/NewProject';
import Project from './pages/projects/Project';

function App() {
  return (
    <Router>
      
      <Navbars/>

      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/company'element={<Company/>} ></Route>
          <Route path='/project'element={<Project />} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/newproject' element={<NewProject/>} ></Route>
        </Routes>
      </Container>

      <Footer />

    </Router>
  )
}

export default App;
