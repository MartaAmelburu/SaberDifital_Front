import Register from './components/Register'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import LogIn from './components/Login'
import Home from './pages/Home'
import Header from './components/Header'
import Cursos from './components/Cursos'
import Help from './pages/Help'
import Profile from './pages/Profile'
import AboutUs from './pages/AboutUs'
import Configuration from './pages/Configuration'
import UserProvider from './context/userProvider'
import CoursePreview from './pages/CoursePreview'
import Course from './pages/Course'
import Footer from './components/Footer'


function App() {
  


  return (
    <>
            <UserProvider>                

      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/courses' element={<Cursos/>}/>
        <Route path='/coursePreview/:id' element={<CoursePreview/>}/>
        <Route path='/course/:id' element={<Course/>}/>
        <Route path='/user' element={<Profile/>}/>
        <Route path='/configuracion' element={<Configuration/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='*' element={<Home/>}/>
        <Route path='/aboutus' element ={<AboutUs/>}/>
        
      </Routes>
      <Footer/>
      </main>
      </UserProvider>        
       

    </>
  )
}

export default App
