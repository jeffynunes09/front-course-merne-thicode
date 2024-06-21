import React from 'react';
import { Button, Nav, InputSpace, ImageLogo,Error } from './NavStyled';
import Logo from "../../images/logo.png";
import { FaSearchengin } from "react-icons/fa6";
import { Outlet, useNavigate,Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';


 
const searchSchema = z.object({


  title: z.string().min(1, { message: 'A pesquisa não pode ser vazia' })
  .refine((value)=> !/^\/s*$/.test(value), {
    message: 'A pesquisa não ter apenas espaços'
  })

})


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
        
        <Button>Entrar</Button>
      </Nav>
       {errors.title && <Error>{errors.title.message}</Error>}
       
      <Outlet/>
    </>
  );
}

export default Navbar;
