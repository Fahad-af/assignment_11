'use client'

import React from 'react'
import Menu from '../component/Menu'



const page = ({searchParams}) => {
 
  return (
    <div>
      <Menu/>
    <center className='text-danger'><h1>Blog post </h1></center>  
      <h2></h2>
      <p></p>
      <div class="card w-100">
  <div className="card-body">
    <h5 className="card-title text-primary">{searchParams.title}</h5>
    <p className="card-text text-info">{searchParams.body}</p>
    
  </div>
</div>
    </div>
  )
}

export default page