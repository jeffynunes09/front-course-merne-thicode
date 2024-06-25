import React from 'react'
import { AuthContainer, Section,Container } from './AuthenticationStyled'
import { ErrorSpan, ImageLogo } from '../../components/Nav/NavStyled'
import Logo from '../../images/logo.png'
import Input from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'
import {z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

import { Outlet, useNavigate,Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import{ signinSchema }from '../../schemas/signinSchema'
import {signupSchema }from '../../schemas/signupSchema'
function Authentication() {


    const { register :registerSignup,
         handleSubmit: handleSubmitSignup
         ,formState:{errors :errorsSignup},
         reset: resetSignup } = useForm({
         resolver:zodResolver(signupSchema)
      });
      
  
    const { register :registerSignin,
         handleSubmit: handleSubmitSignin
         ,formState:{errors :errorsSignin},
         reset: resetSignin } = useForm({
            resolver:zodResolver(signinSchema)
      });
      
       const inHandleSubmit =(data) => {
        console.log(data)
       }
  
       const upHandleSubmit =(data) => {
        console.log(data)
       }
  
      
      const navigate = useNavigate()

  return (
     <Container>
        <Link to='/'><ImageLogo src={Logo} alt="logo Jn News" /></Link>
         <AuthContainer>
        

        <Section type="signin">

            <h2>Entrar</h2>
            <form onSubmit={handleSubmitSignin(inHandleSubmit)}>
                <Input type="email" placeholder="Email" name="email" register={registerSignin}>
                </Input>
                {errorsSignin.email && (
                <ErrorSpan>{errorsSignin.email.message}</ErrorSpan>
                 )}
                <Input type="password" placeholder="Senha" name="password" register={registerSignin}>
                </Input>
                {errorsSignin.password && (
            <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
          )}
                <Button type="submit" text="Entrar">Entrar</Button>
                
            </form>
            
        </Section>
        <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignup(upHandleSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            register={registerSignup}
          />
          {errorsSignup.name && (
            <ErrorSpan>{errorsSignup.name.message}</ErrorSpan>
          )}
          <Input
            type="email"
            placeholder="E-mail"
            name="email"
            register={registerSignup}
          />
          {errorsSignup.email && (
            <ErrorSpan>{errorsSignup.email.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignup}
          />
          {errorsSignup.password && (
            <ErrorSpan>{errorsSignin.password.message}</ErrorSpan>
          )}
          <Input
            type="password"
            placeholder="Confirmar senha"
            name="confirmPassword"
            register={registerSignup}
          />
          {errorsSignup.confirmPassword && (
            <ErrorSpan>{errorsSignup.confirmPassword.message}</ErrorSpan>
          )}
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
     </Container>
    
  )
}

export default Authentication