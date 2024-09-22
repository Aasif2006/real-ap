
 import React from 'react'
import '../style/Error.css'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <>
     <div className="cool">
    <div class="number">404</div>
    
  </div>
  <div class="text"><Link to="/">
      <button>Go to Back</button></Link>
    </div>
    </>
  )
}

export default Error