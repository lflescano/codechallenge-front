import React from 'react'
import { Link } from 'react-router-dom'
import "./CardDay.scss"


const CardDay = ({day}) => {
  return (
    <div>
        <div className="col-sm-10 mt-5">
                <div className="ms-3 mb-5">
                    <div className="card-body card-total">
                        <div className="card-principal">
                            <h1 className="">{day}</h1>
                            <h2 className="pb-2">dias</h2>
                        </div>
                    <p className="card-text d-flex  card-description">
                        Accedé a todas las analitcas de 
                        JudIT por 30 dias.
                    </p>
                    <Link to="#" className="btn  d-flex justify-content-center m-2 rounded-pill mt-4 button-buy">
                        <span>
                            COMPRAR PLAN
                        </span>
                    </Link>
                    </div>
                </div>
                </div>
    </div>
  )
}

export default CardDay