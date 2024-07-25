import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Admission from './pages/Admissions';
import Student from './pages/Student';
import Faculty from './pages/Faculty';
import About from './pages/About';
import {ImageGallery} from './components/ImageGallery';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-black text-success fw-semibold'>
            Springdale
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
              <Nav.Link href='/academics' className='text-uppercase'>Academics</Nav.Link>
              <Nav.Link href='/admissions' className='text-uppercase'>Admissions</Nav.Link>
              <Nav.Link href='/faculty' className='text-uppercase'>Faculty</Nav.Link>
              <Nav.Link href='/student' className='text-uppercase'>Students'Life</Nav.Link>
              <Nav.Link href='/ImageGallery' className='text-uppercase'>Gallary</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/admissions' element={<Admission />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/student' element={<Student />} />
        <Route path='/ImageGallery' element={<ImageGallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Priya Kshirsagar</p>
      </footer>
    </div>
  );
}

export default App;