import styled from 'styled-components'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios'
import { useHistory } from 'react-router';
import { useState } from 'react';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;
`

const CardStyle = styled.div`
  position: relative;
  width: 600px;
  height: ${props => props.altura ? props.altura : '800px'};
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);

  .content {
    padding: 20px;
    text-align: center;
    transition: 0.5s;

    .formLogin {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 350px;
      justify-content: center;
    }

    h2 {
      width: 100%;
      position: absolute;
      top: 45px;
      right: 50%;
      transform: translateX(50%);
      font-size: 5.25rem;
      color: rgba(255, 255, 255, 0.05);
      pointer-events: none;
    }

    form {
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      width: 400px;
      height: 600px;
      justify-content: initial;

      span {
        text-align: initial;
        color: #960303;
        height: 18px;
      }

      input {
        font-size: 1rem;
        padding-left: 10px;
        border: none;
        color: #fff;
        height: 35px;
        background: rgba(255, 255, 255, 0.05);

      :nth-of-type(n + 2) {
        margin-top: 15px;
        }
      }

      select {
        background: #fffdfd73;
        height: 30px;
        margin-top: 30px;
      }

      button {
        background: beige;
        align-self: center;
        width: 50%;
        height: 50px;
        margin-top: 50px;
        text-transform: uppercase;
        font-size: 1.75rem;
        cursor: pointer;
        box-shadow: 0 0 10px 2px black;
      }
    }
  }
`

export const Card = ( { text, endpoint, altura } ) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const schema = yup.object().shape({
    name: yup.string().required("Mandatory name"),
    password: yup.string().required("Mandatory password").min(6, "Minimun 6 characters").max(12, "Maximun 12 characters"),
    email: yup.string().required("Mandatory email").email("Invalid email"),
    bio: yup.string(),
    contact: yup.string().required("Mandatory social media"),
    course_module: yup.string().required("Mandatory module")
  })
  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmitRegister = (data) => {
    const URL = 'https://kenziehub.me/users'
    
    axios.post(URL, data)
      .then(() => history.push('/login'))
      .catch((err) => console.log(err))
  }

  const onSubmitLogin = (e) => {
    e.preventDefault()
    const formData = {
      email: email,
      password: password
    }
    const URL = 'https://kenziehub.me/sessions'
    
    axios.post(URL, formData)
      .then((response) => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('id', response.data.user.id)
        history.push(`/wellcome/${response.data.user.id}`)
      })
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <CardStyle altura={altura}>
        <div className='content'>
          <h2>{text}</h2>
          {endpoint === 'register' ?
          <form onSubmit={handleSubmit(onSubmitRegister)}>  
            <input type="text" placeholder='Name' {...register('name')}/>
            <span className='erro'>{errors.name?.message}</span>
            <input type="password" placeholder='Password'{...register('password')}/>
            <span>{errors.password?.message}</span>
            <input type="email" placeholder='E-mail'{...register('email')}/>
            <span>{errors.email?.message}</span>
            <input type='text' placeholder='Bio' {...register('bio')}/>
            <span>{errors.bio?.message}</span>
            <input type='text' placeholder='Contact' {...register('contact')}/>
            <span>{errors.contact?.message}</span>
            <input type='text' placeholder='Course module' {...register('course_module')}/>
            <span>{errors.course_module?.message}</span>
            <button>Register</button>
          </form> 
          : 
          <form className='formLogin' onSubmit={(e) => onSubmitLogin(e)}>
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
            <button>Login</button>
          </form>
          }
        </div>
      </CardStyle>
    </Container>
  )
}