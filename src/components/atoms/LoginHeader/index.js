import React from 'react'
import './styles.scss';
import { isMobile } from '../../../helpers/Mobile';
import { Link } from 'react-router-dom';
import Logo from './Logo.png'

const LoginHeader = () => {

return <div className="login-header-container justify-content-between">
   <div className="login-header-logo">
        <Link to="#">
            <img src={Logo} alt="logo" height="80" className='logo-header'/>
        </Link>
   </div>
   {!isMobile &&
   <div className="login-header-title">
       <h1 className="login-header-title-text"></h1>
        <div className="login-header-title-line"></div>
   </div>
    }
    {!isMobile && 
    <div className="login-header-contact-info">

    </div>
    }
</div>
}

export default LoginHeader;