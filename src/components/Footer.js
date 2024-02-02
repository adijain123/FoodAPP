import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-primary'>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
      </a>
      <span className="text fs-4">© 2024 GoFood, Inc </span>
    </div>

    <ul className="nav col-md-4 justify-content list-unstyled d-flex">
      <Link className="ms-3 nav-link active text-white fs-5">twitter</Link>
      <Link className="ms-3 nav-link active text-white fs-5">facebook</Link>
      <Link className="ms-3 nav-link active text-white fs-5">instagram</Link>
    </ul>
  </footer>
    </div>
  )
}
