import React from 'react'
import './Footer.scss'
import LogoFooter from'./img/logoFooters2.png'

const Footer = () => {
  return (
    <div className='footer-bg d-flex justify-content-between align-items-center'>
        <img src={LogoFooter} alt="logo" height="60" className='logo-footer ms-5 m-3'/>
        <div className='d-flex me-5'>
            <p>Terminos y condiciones | Terminos de cancelación</p>
            <p className='ms-3 me-3'>|</p>
            <p>2021, judIT. Todos los derechos reservados</p>
        </div>

    </div>
  )
}

export default Footer