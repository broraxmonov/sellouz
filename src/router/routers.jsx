import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Firstpage from '../pages/firstpage'
import Secondpage from '../pages/secondpage'
export default function routers() {
  return (
     <BrowserRouter>
         <Routes>
            
               <Route path='/' element={<Firstpage/>} />
               <Route path='/sellomarket' element={<Secondpage/>} />

         </Routes>
     </BrowserRouter>
  )
}
