import { Outlet } from 'react-router-dom'
import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import './styles/app.scss'

function App() {
  
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
