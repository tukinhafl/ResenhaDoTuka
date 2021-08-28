import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Navigation = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 70px;
  background: #2b343b;
  box-shadow: 10px 0 0 #4187f6;
  border-left: 10px solid #2b343b;
  overflow-x: hidden;
  transition: width 0.5s;
  z-index: 3;

  &:hover {
    opacity: 0.95;
    width: 300px;
  }

  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 0 0 5px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      position: relative;
      list-style: none;
      width: 100%;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;

      &.active {
        background: #4187f6;
        
        a::before {
          content: '';
          position: absolute;
          top: -30px;
          right: 0;
          width: 30px;
          height: 30px;
          background: #2b343b;
          border-radius: 50%;
          box-shadow: 15px 15px 0 #4187f6;
        }

        a::after {
          content: '';
          position: absolute;
          top: 60px;
          right: 0;
          width: 30px;
          height: 30px;
          background: #2b343b;
          border-radius: 50%;
          box-shadow: 15px -15px 0 #4187f6;
        }
      }
    }

    a {
      position: relative;
      display: block;
      width: 100%;
      display: flex;
      text-decoration: none;
      color: #fff;

      .icon {
        position: relative;
        display: block;
        min-width: 60px;
        height: 60px;
        line-height: 70px;
        text-align: center;

        i {
          position: relative;
          font-size: 1.5rem;
          z-index: 1;
        }
      }

      .title {
        position: relative;
        display: block;
        padding-left: 10px;
        height: 60px;
        line-height: 60px;
        white-space: nowrap;
      }
    }
  }
`

export const Menu = () => {
  const [active, setActive] = useState<number>(0)
  const id = localStorage.getItem('id')

  return (
    <Navigation>
      <ul>
        <li className={`list ${active === 1 && 'active'}`}>
          <Link to='/' onMouseOver={() => setActive(1)} onMouseOut={() => setActive(0)}>
            <span className='icon'><i className="fas fa-home"></i></span>
            <span className='title'>Home</span>
          </Link>
        </li>
        <li className={`list ${active === 2 && 'active'}`}>
          <Link to="/register" onMouseOver={() => setActive(2)} onMouseOut={() => setActive(0)}>
            <span className='icon'><i className="fas fa-clipboard-list"></i></span>
            <span className='title'>Register</span>
          </Link>
        </li>
        <li className={`list ${active === 3 && 'active'}`}>
          <Link to='/login' onMouseOver={() => setActive(3)} onMouseOut={() => setActive(0)}>
            <span className='icon'><i className="fas fa-sign-in-alt"></i></span>
            <span className='title'>Login</span>
          </Link>
        </li>
        <li className={`list ${active === 4 && 'active'}`}>
          <Link to={id ? `/wellcome/${id}` : '/register'} onMouseOver={() => setActive(4)} onMouseOut={() => setActive(0)}>
            <span className='icon'><i className="fas fa-user-circle"></i></span>
            <span className='title'>Dashboard</span>
          </Link>
        </li>
        <li className={`list ${active === 6 && 'active'}`}>
          <Link to='/community' onMouseOver={() => setActive(6)} onMouseOut={() => setActive(0)}>
            <span className='icon'><i className="fas fa-users"></i></span>
            <span className='title'>Community</span>
          </Link>
        </li>
        {id && 
        <li className={`list ${active === 5 && 'active'}`}>
          <Link to={'/'} onClick={() => localStorage.clear()} onMouseOver={() => setActive(5)} onMouseOut={() => setActive(0)}>
            <span className='icon'><i className="fas fa-door-open"></i></span>
            <span className='title'>Logoff</span>
          </Link>
        </li>}
      </ul>
    </Navigation>
  )
}