import { BrowserRouter } from 'react-router-dom' //enrutamiento SPA
import './styles/styles.scss' //sustituimos app.css
import Footer from './components/Footer'
import Header from './components/Header'
import MiMain from './components/MiMain'


function App() {

  return (
    <>
      <BrowserRouter >
        <Header />
        <MiMain />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
