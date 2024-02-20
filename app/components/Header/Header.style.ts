import styled from 'styled-components';

interface MenuProps {
    isOpen: boolean
}

export const HeaderWrapper = styled.header`
width: 100%;
background-color:black;

display: flex;
align-items: center;
color: white;
`
export const HeaderConteiner = styled.div`
display: flex;
justify-content: space-between;
max-width: 900px;
height: 60px;
width: 100%;
padding: 5px;
margin: auto;

border: 1px solid;
border-color: red;
`
export const Logo = styled.div`
display: flex;
padding: 5px;
align-items: center;
font-weight: bold;
font-size: large;


border: 1px solid;
border-color: red;
`
export const Nav = styled.nav`

display: flex;
padding: 5px;
align-items: center;

border: 1px solid;
border-color: red;

ul{
    display: flex;
    padding: 5px;
    gap: 10px;
   
    border: 1px solid;
    border-color: red;
}

li{
    border-radius: 5px;

    border: 1px solid;
    border-color: red;
    width: 70px;
    text-align: center;
   
}

a:hover {
    font-weight: 500;
}

@media(max-width: 425px) {
ul{
    flex-direction: column;
    position: absolute;
    align-items: center;
    top: 60px;
    left: 40%;
    right: 0;
    bottom: 0;
    padding: 10px;
    background-color: red;
}
}

`

export const Hamburguer = styled.div<MenuProps>`
display: none;

@media(max-width:425px) {
    display: flex;

}

`
