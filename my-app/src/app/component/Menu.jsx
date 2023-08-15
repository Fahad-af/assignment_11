import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div>
          
         
          <nav className="nav">
  
  <Link href={'/home'}  className="nav-link">Home</Link>
   <Link href={'/blog'} className="nav-link">Blog</Link>
</nav>
    </div>
  )
}

export default Menu