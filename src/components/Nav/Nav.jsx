import React from 'react'
import { BsSearch } from "react-icons/bs";
import Logo from "../../images/logo.png"
import { FaSearchengin } from "react-icons/fa6";
import './Nav.css'
function Nav() {
  return (
    <>
    <nav>
    
        <div className='input-search-space'>
        <FaSearchengin className='bi-search' />
            <input type="text" placeholder='Pesquise por um titulo' />
        </div>

        <img src={Logo} alt="logo Jn News" />

        <button>Entrar</button>
    </nav>
   
    </>
  )
}

export default Nav