import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
        {/* nav items ko alg alg krna h */}
          <a>
            <img src='/images/home-icon.svg' />
            <span>HOME</span>
          </a>

          <a>
            <img src='/images/search-icon.svg' />
            <span>SEARCH</span>
          </a>
          <a>
            <img src='/images/watchlist-icon.svg' />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src='/images/original-icon.svg' />
            <span>ORIGINAL</span>
          </a>
          <a>
            <img src='/images/movie-icon.svg' />
            <span>MOVIES</span>
          </a>
          <a>
            <img src='/images/series-icon.svg' />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSStEXQ52SE6txqvnwfAyOZ-dt6fkkBqzcir0RaZkoG54dYK7UByieR90Nb18ON4rdZ6VyDNVuQdk1kXik"/>

    </Nav>
  )
}

export default Header;

const Nav= styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    ${'' /* niche mene dala h */}
    box-shadow: rgb(0 0 0 / 79%) 0px 26px 30px -10px,
        rgb(0 0 0 / 63%) 0px 16px 10px -10px;

`
const Logo= styled.img`
  width: 80px;
  @media (max-width: 768px) {
      visibility: visible;

    }
`
const NavMenu= styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    
    @media (max-width: 768px) {
      visibility: hidden;

    }

    a{
      display: flex;
      align-items: center;
      padding: 0 12px;
      cursor: pointer;

      img{
        height: 20px;
      }
      span{
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;

        &:after{
          content: "";
          height: 2px;
          background: white;
          position: absolute;
          right: 0;
          left: 0;
          bottom: -6px;
          opacity: 0;
          transform-origin: left-center;
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; 
          transform: scaleX(0);
        }
      }
      &:hover{
        span:after{
          transform: scaleX(1);
          opacity: 1;
        }
      }
    }
`
const UserImg= styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`