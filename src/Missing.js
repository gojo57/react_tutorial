import React from 'react'
import { Link } from 'react-router-dom'

function Missing() {
  return (
    <main className='Missing'>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <p>
          <Link to="/">Go back to the home page</Link>
        </p>
    </main>
  )
}

export default Missing