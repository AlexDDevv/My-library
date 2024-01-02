import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/HomePage"
import Library from "../../pages/Library"
import Contact from "../../pages/Contact"
import Research from "../../pages/Research"
import NotFound from "../../pages/NotFound"

export default function IndexRoutes() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/library' element={<Library />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/recherche' element={<Research />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
  )
}
