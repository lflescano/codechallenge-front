import React from "react";

import MainLayout from 'components/organisms/MainLayout';
import "./Subscripcion.scss"
import CardDay from "./CardDay/CardDay";

const Subscripcion = ({title}) => {
    return (
      <MainLayout>
        <div className="community-list-header">
        <div className="container card container-card">
            <div className="pt-5">
                <h3>
                    Mi subscripción
                </h3>
                <p className="card-text   card-description">
                    Actualmente estas dentro de los 30 dias de subscripción gratuita
                    <br/>
                    Dias restantes: 22
                </p>
            </div>
            <div className="  d-flex  justify-content-around">
                <CardDay day={30}/>
                <CardDay day={90}/>
                <CardDay day={365}/>
            </div>
        </div>
        </div>
      </MainLayout>
    );
}

export default Subscripcion;





