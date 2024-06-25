import React from 'react';
import { Button, Nav, InputSpace, ImageLogo,ErrorSpan } from './NavStyled';
import Logo from "../../images/logo.png";
import { FaSearchengin } from "react-icons/fa6";
import { Outlet, useNavigate,Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import {searchSchema } from '../../schemas/searchSchema'


 


function Navbar() {
  const { register, handleSubmit,formState:{errors}, reset } = useForm({
    resolver: zodResolver(searchSchema)
  });
  
  const navigate = useNavigate()

  function onSearch(data) {
    const {title} = data 
     navigate(`/search/${title}`)
    reset(); // Reset form after submission if needed
  }

  const goAuth = () => {

     navigate(`/auth`)
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace className='input-search-space'>
           <button type='submit'>
           <FaSearchengin className='bi-search' />
           </button>
            <input {...register('title')} type="text" placeholder='Pesquise por um titulo' />
          </InputSpace>
        </form>

        <Link to='/'><ImageLogo src={Logo} alt="logo Jn News" /></Link>
        
        <Link to='/auth'>
        <Button>Entrar</Button>
        </Link>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
       
      <Outlet/>
    </>
  );
}

export default Navbar;
