import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './Search.css'

export const Search = () => {
  return (
    <div className="backgroundSearch d-flex  align-items-center ">
      <h6 className="text-search">
        te quedan 22 dias de tu subscripción gratuita
      </h6>
        <form>
          <input  type="search"  className="input"></input>
          <button className='button-search'>
            <FontAwesomeIcon icon={faSearch} size="lg" className='icon-search' />
          </button>
        </form>
        
    </div>
  );
}
