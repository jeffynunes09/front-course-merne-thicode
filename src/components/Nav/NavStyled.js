import styled from 'styled-components';


export const Nav = styled.nav`

    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem;
   /* position: fixed;
    top: 0;*/
    background-color: #fff;
    z-index: 1;
    box-shadow: -1px 3px 6px -1px rgba(0,0,0,0.85);
    



`;

export const InputSpace = styled.div`
position: relative;
width: 220px;
height: 40px;
display:flex;
align-items: center;

button{
    position: absolute;
    top: 1;
    right: 0.2rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    color: #757575;
    border-radius: 0.3rem;
    padding: 0.5rem;
    cursor:pointer;
    transition: 0.5s;

    &:hover {
        background-color:#8c8c8c;
        color:white;
    }
}
input{
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 100%;
   
    border-radius: 0.3rem;
    &:focus{

border: 1px solid #0bade3;
}
}


`;


export const ImageLogo = styled.img`


width: 9rem;
    height: 4rem;
    cursor: pointer;
    object-fit: cover;

`;


export const Button = styled.button`
background-color: #0bade3;
border: none;
outline: none;
font-size: 1rem;
padding: 0.4rem 1rem;
color: #fff;
transition: all 0.4s ease-in-out;
cursor: pointer;
border-radius: 0.3rem;
font-family: Roboto, Arial, Helvetica, sans-serif;
/* width: 40%;*/
font-weight: 500;
letter-spacing: 0.1rem;
text-transform: uppercase;
&:hover{
  background-color:#05455a
}

`;


export const Error = styled.span `

display:flex;
justify-content:center;
background-color:#910000;
color:white;
padding:1rem;
font-weight:bold;
font-size:1.1rem;



`