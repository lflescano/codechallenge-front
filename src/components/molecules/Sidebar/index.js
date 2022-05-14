import React from "react";
import { Link } from "react-router-dom";

// import LoginHeader from "components/atoms/LoginHeader";
import { isMobile } from 'helpers/Mobile';

import "./styles.scss";

const Sidebar = () => {
    return (
      <div className="sidebar-container">
        {/* {!isMobile && 
            <LoginHeader></LoginHeader>
            } */}
        <React.Fragment>
          <div className="menu-items align-items-start ms-5 pt-3">
            <div className="items-sidebar">
              <div class="card" >
                <div class="">
                  <Link
                    className="item "
                    activeclassname="active-item"
                    to="/misdatos"
                  >
                    {!isMobile && <div className="item-title item-sidebar">Mis datos</div>}
                  </Link>
                  <Link
                    className="item"
                    activeclassname="active-item"
                    to="/MiSubscripción"
                  >
                    {!isMobile && (
                      <div className="item-title">Mi subscripción</div>
                    )}
                  </Link>
                  <Link
                    className="item"
                    activeclassname="active-item"
                    to="/CambiarContraseña"
                  >
                    {!isMobile && (
                      <div className="item-title">Cambiar contraseña</div>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {isMobile && <div className="menu-line"></div>}
        </React.Fragment>
      </div>
    );
}

export default Sidebar;
