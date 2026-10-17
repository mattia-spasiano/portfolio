import './App.css'
import { Routes, Route } from 'react-router'
import MainLayout from './layout/MainLayout'
import ContactPage from './pages/Contacts'
import ProjectsPage from './pages/Projects'
import AboutMe from './pages/AboutMe'
import LPLayout from './layout/LandingPageLayout'

function App() {

  return (
    <>
      <Routes>
        <Route 
          path='/'
          element={<LPLayout/>}/>
        
        <Route
          element={<MainLayout />} />
        <Route
          path='/projects'
          element={<ProjectsPage />} />
        <Route
          path='/contacts'
          element={<ContactPage />} />
        <Route
          path='/about'
          element={<AboutMe />} />
      </Routes>
    </>
  )
}

export default App