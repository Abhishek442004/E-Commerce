import React from 'react'
import './NoPage.css';

function NoPage() {
  return (
    <div className='nopage-main'>
        <h1>Page Not Found</h1>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/">Go back to the home page</a>
    </div>
  )
}

export default NoPage