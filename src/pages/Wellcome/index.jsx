import { Menu } from '../../components/Menu'
import { Dashboard } from '../../components/Dashboard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import toast, { Toaster } from 'react-hot-toast'
import { ModalAvatar } from '../../components/ModalAvatar'

export const Wellcome = () => {
  const [estadoModalTech, setEstadoModalTech] = useState(undefined)
  const [modalAvatar, setModalAvatar] = useState(undefined)
  const [tech, setTech] = useState('')
  const [nivel, setNivel] = useState('')
  const token = localStorage.getItem('token')
  const params = useParams()
  const [techList, setTechList] = useState([])
  const [userInfo, setUserInfo] = useState(undefined)
  // eslint-disable-next-line
  const [avatar, setAvatar] = useState('http://s2.glbimg.com/k9S_nEXQns81MzLlZO61JyCwqRM=/0x0:694x363/695x364/s.glbimg.com/po/tt2/f/original/2015/07/01/snapchat-flashy-features.jpg')

  const openModalAvatar = () => {
    setModalAvatar(true)
  }

  const closeModalAvatar = () => {
    setModalAvatar(false)
  }

  const openModalTech = () => {
    setEstadoModalTech(true)
  }

  const closeModalTech = () => {
    setEstadoModalTech(false)
  }

  useEffect(() => {
    axios.get(`https://kenziehub.me/users/${params.id}`)
      .then((response) => {
        setTechList(response.data.techs)
        setUserInfo(response.data)
      })
      .catch(err => console.log(err))
      // eslint-disable-next-line
  }, [])
  
  const handleTechRegister = (e) => {
    e.preventDefault()
    const URL = 'https://kenziehub.me/users/techs'
    const registerTech = {
      title: tech,
      status: nivel
    }

    axios.post(URL, registerTech, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => setTechList([...techList, response.data]))
      .then(() => setEstadoModalTech(false))
      .catch((err) => console.log(err))
  }

  const deleteTech = (id) => {
    axios.delete(`https://kenziehub.me/users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => axios.get(`https://kenziehub.me/users/${params.id}`)
      .then(response => setTechList(response.data.techs))
      .catch(err => console.log(err))
      )
      .catch(err => console.log(err))
  }

  const upgradeStatus = (e, id) => {
    let statusAtual = e.target.dataset.status
    if(statusAtual === 'Iniciante') {
      axios.put(`https://kenziehub.me/users/techs/${id}`, {
        status: 'Intermediario'
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => axios.get(`https://kenziehub.me/users/${params.id}`))
      .then(response => {
        setTechList(response.data.techs)
        toast.success('Você evoluiu de Squirtle pra Wartortle. 😎')
      })
    } else if (statusAtual === 'Intermediario') {
      axios.put(`https://kenziehub.me/users/techs/${id}`, {
        status: 'Avançado'
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => axios.get(`https://kenziehub.me/users/${params.id}`))
      .then(response => {
        setTechList(response.data.techs)
        toast.success('Você evoluiu de Wartortle pra Blastoise. 🤩')
      })
    } else {
      toast('Você ja é um Blastoise.', {
        icon: '🥳'
      })
    }
  }

  const downgradeStatus = (e, id) => {
    let statusAtual = e.target.dataset.status
    if(statusAtual === 'Avançado') {
      axios.put(`https://kenziehub.me/users/techs/${id}`, {
        status: 'Intermediario'
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => axios.get(`https://kenziehub.me/users/${params.id}`))
      .then(response => {
        setTechList(response.data.techs)
        toast.success('Você era um Blastoise, agora virou um Wartortle. 🙁')
      })
    } else if (statusAtual === 'Intermediario') {
      axios.put(`https://kenziehub.me/users/techs/${id}`, {
        status: 'Iniciante'
      }, 
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => axios.get(`https://kenziehub.me/users/${params.id}`))
      .then(response => {
        setTechList(response.data.techs)
        toast.success('Você era um Wartortle e virou um Squirtle. 😢')
      })
    } else {
      toast.error('Você não pode voltar pra pokebola. 😭')
    }
  }

  return (
    <>
      <Toaster />
      {modalAvatar &&
        <ModalAvatar token={token} closeModalAvatar={closeModalAvatar}/>
      }
      <Menu />
      <Dashboard>
        <div>
          <div className='avatarContainer'>
            <img src={avatar} alt="Foto de perfil" />
            <button className='avatarButton' disabled onClick={openModalAvatar}>Mude seu avatar</button>
          </div>
        </div>
        <div className='info'>
          <h1>{userInfo?.name}</h1>
          <p>{userInfo?.email}</p>
        </div>
        <div className='bio'>
          <p>
            Modulo: {userInfo?.course_module} <br/>
            Biografia: {userInfo?.bio} <br/>
            Contato: {userInfo?.contact}
          </p>
        </div>
        <section className='tecnologias'>
          <ul id='itemRoll'>
            {techList.map(elm =>
            <li key={elm.id} className='techCard'>
              <img 
                src={`https://xesque.rocketseat.dev/platform/tech/${elm.title.toLowerCase()}.svg`} 
                alt="" 
              />
              <p>{elm.title}</p>
              <p>
                <i class="fas fa-arrow-alt-circle-down" data-status={elm.status} onClick={(e) => downgradeStatus(e, elm.id)}></i>
                  Status: {elm.status}
                <i class="fas fa-arrow-alt-circle-up" data-status={elm.status} onClick={(e) => upgradeStatus(e, elm.id)}></i>
              </p>
              <span onClick={() => deleteTech(elm.id)}><i class="fas fa-trash-alt"></i></span>
            </li>
            )}
            <li className='techCard botao'>
              <button onClick={openModalTech}>+</button>
            </li>
          </ul>
        </section>
        {estadoModalTech && 
        <div className='modal'>
          <span onClick={closeModalTech}>X</span>
          <div>
            <form onSubmit={(e) => handleTechRegister(e)}>
              <select value={tech} onChange={(e) => setTech(e.target.value)} required>
                <option selected></option>
                <option value="ReactJS">ReactJS</option>
                <option value="Flutter">Flutter</option>
                <option value="Typescript">Typescript</option>
                <option value="Javascript">Javascript</option>
                <option value="HTML5">HTML5</option>
                <option value="CSS3">CSS3</option>
                <option value="Ruby">Ruby</option>
                <option value="PHP">PHP</option>
                <option value="Java">Java</option>
                <option value="Laravel">Laravel</option>
              </select>
              <select value={nivel} onChange={(e) => setNivel(e.target.value)} required>
                <option selected></option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediario">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button type='submit'>Adicionar tecnologia</button>
            </form>
          </div>
        </div>
        }
      </Dashboard>
    </>
  )
}