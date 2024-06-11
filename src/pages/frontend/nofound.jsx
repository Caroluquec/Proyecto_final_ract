import React from 'react'
import { Link } from 'react-router-dom'

function Nofound() {
  return (
    <>
    <div className='text-center'>
        <h1>LA PAGINA NO EXISTE</h1>        
        <Link className='btn btn-success' to= "/">Regresar al inicio</Link>
    </div>
    
    </>
  )
}

export default Nofound