import React from 'react'
import '../css/header.css'
import { Link } from 'react-router-dom'

export default function header() {
  return (
    <div className="header_div1"> 
           <div className='header_div11'>
              <div className='header_div111'>
                <Link class="btn" to="/sellomarket" role="button">Sello market</Link>
                <Link class="btn" to="/" role="button">Sello Pay</Link>
                
              </div>
              <div className='header_div112'>
       
               </div>
               <div className='header_div113'>

               </div>
           </div>
           <div className='header_div12'>
            </div>     
    </div>
  )
}
