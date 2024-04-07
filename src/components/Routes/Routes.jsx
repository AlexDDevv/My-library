import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../../pages/HomePage"
import Library from "../../pages/Library"
import Contact from "../../pages/Contact"
import Research from "../../pages/Research"
import NotFoundPage from "../../pages/NotFoundPage"

export default function IndexRoutes() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/library' element={<Library />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/recherche' element={<Research />} />
                <Route path='/notFound' element={<NotFoundPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
  )
}
