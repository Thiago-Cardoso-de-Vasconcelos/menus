'use client';
import React, { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  HeaderConteiner,
  Logo,
  Nav,
  Hamburguer,
} from './Header.style';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize =  () => {
    if(window.innerWidth > 427 && !menuOpen) {
      setMenuOpen(true)
    }
    if(window.innerWidth < 426 && menuOpen) {
      setMenuOpen(false)
    }
  }

  useEffect (() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [menuOpen])

  return (
    <>
      <HeaderWrapper>
        <HeaderConteiner>
          <Logo>Logo</Logo>
          <Nav>
            <Hamburguer onClick={toggleMenu}>
              {menuOpen ? (
                <IoCloseSharp color='white' />
              ) : (
                <TiThMenu color='white' />
              )}
            </Hamburguer>
            {menuOpen || window.innerWidth > 427 ? (
              <ul>
                <li>
                  <a href='/'>Inicio</a>
                </li>
                <li>
                  <a href='/'>Sobre</a>
                </li>
                <li>
                  <a href='/'>Portfolio</a>
                </li>
                <li>
                  <a href='/'>contato</a>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </Nav>
        </HeaderConteiner>
      </HeaderWrapper>
    </>
  );
}
