import { Route, Routes, Navigate } from 'react-router-dom' //Enrutamiento SPA
import React from 'react'
import ClimbList from './ClimbList'
import Motivacion from './Motivacion'
import Contact from './Contact'
/* import About from './About' */
import Home from './Home'

function MiMain() {
  return (
    <main className="main">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/climblist' element={<ClimbList />} />
        <Route path='/motivacion' element={<Motivacion />} />
        <Route path='/contact' element={<Contact />} />
       {/*  <Route path='/about' element={<About />} /> */}
        {/* <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/summer' element={<SummerCourse />} />
        <Route path='/topic' element={<Topic />} /> */}
        <Route path='/*' element={<Navigate to={'/'} />} /> {/* Se puede mandar a error404 pero hay que prepararla */}
      </Routes>
    </main>
  )
}

export default MiMain