import styled from 'styled-components'
import axios from 'axios'

const ModalAvatarStyle = styled.div`
  height: 100vh;
  width: 100vw;
  background: #00000081;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;

  .containerAvatarModal {
    border: 1px solid black;
    height: 200px;
    width: 500px;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .tituloAvatar {
      color: white;
      text-align: center;
    }

    .inputAvatar {
      width: 80%;
      height: 30px;
      box-sizing: border-box;
      padding-right: 10px;
    }

    .botaoAvatar {
      cursor: pointer;
      height: 30px;
      width: 20%;
    }
  }
`

export const ModalAvatar = ( { token, closeModalAvatar } ) => {

  const mudaAvatar = (e) => {
    let avatarURL = e.target.previousElementSibling.value

    axios.put('https://kenziehub.me/users/profile', {
      avatar_url: avatarURL
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(resp => console.log(resp))

  }
  return (
    <ModalAvatarStyle onClick={closeModalAvatar}>
      <div className='containerAvatarModal'>
        <h1 className='tituloAvatar'>Atualize seu avatar abaixo.</h1>
        <div className='containerInputBotaoAvatar'>
          <input className='inputAvatar' type="file" placeholder='Digite a URL da imagem' required/>
          <button className='botaoAvatar' onClick={(e) => mudaAvatar(e)}>Enviar URL</button>
        </div>
      </div>
    </ModalAvatarStyle>
  )
}