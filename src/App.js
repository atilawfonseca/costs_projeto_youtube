import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Container from './components/layout/Container';
import Navbars from './components/layout/Navbars';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';

function App() {
  return (
    <Router>
      <Navbars/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/company'element={<Company/>} ></Route>
          <Route path='/project'element={<Project/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
        </Routes>
      </Container>

      <p>Footer</p>

    </Router>
  )
}

export default App;
