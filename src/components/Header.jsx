import React,{ useEffect} from 'react'
import styled from "styled-components"
import { useHistory } from 'react-router-dom'
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  serSignOut,
  setSignOut
} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"
import { auth,provider} from "../firebase"


function Header() {
  const dispatch =useDispatch()
  const history= useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
      if(user){
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        
        
      }
    })
  },[])

  const signIn =() => {
      auth.signInWithPopup(provider)
      .then((result)=>{
        console.log(result);
        let user= result.user
        dispatch(setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
        history.push("/home")
        window.location.reload(false);
      })
  }

  const signOut= ()=>{
    auth.signOut()
    .then(()=>{
      dispatch(setSignOut());
      history.push("/")
      window.location.reload(false);
    })
  }

  const homesweethome = ()=>{
      history.push("/home")
      window.location.reload(false);
  }
 
  return (
    <Nav>
      <Logo src="/images/logo.svg" />

      {!userName ? (

        <LoginContainer>
          <Login onClick={signIn}>Login</Login>
        </LoginContainer>

      ) :
        <>
          <NavMenu>
            {/* nav items ko alg alg krna h */}
            <a onClick={homesweethome}>
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
          <UserImg onClick={signOut} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        </>

      }



    </Nav>
  )
}

export default Header;

const Nav = styled.nav`
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
const Logo = styled.img`
  width: 80px;
  @media (max-width: 768px) {
      visibility: visible;

    }
`
const NavMenu = styled.div`
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
const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0,0,0,0.6);
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover{
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`
const LoginContainer= styled.div`
  flex:1;
  display: flex;
  justify-content: flex-end;
`