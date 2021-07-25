import { Menu } from '../../components/Menu'
import { Landing } from '../../components/Landing'
import { Link } from 'react-router-dom'
import { Fireworks } from '../../components/Fireworks'

export const Home = () => {
  return (
    <>
      <Menu />
      <Landing>
        <div>
          <h1>Salvin salvin!!</h1>
          <h2>Resenha do Tuka</h2>
          <p>Bem vindo a resenha do Tuka, um espaço feito pra você. Sim, você
            aquele que ficava o dia inteiro sem saber onde listar as tecnologias que conhece. Aqui
            é onde você pode lista e/ou alterar essas tecnologias e até aproveitar 
            pra criar vergonha na cara e estudar algumas delas que poderão 
            mudar a sua vida em um futuro não tao distante. <br/>
            Ah, você não acredita em mim né? Então porque não tenta se cadastrar 
            clicando no menu ao lado na aba <Link to='/register'>Register</Link> e depois faça 
            Login e crie seu <i>Dashboard</i> personalizado para ir adicionando de tempos 
            em tempos as tecnologias que você aprendeu e seus avanços continuos? Gostou? <br/>
            <strong>É FACIL, É UTIL, É A RESENHA DO TUKA!</strong>
          </p>
        </div>
        <Fireworks ok={true}/>
      </Landing>
    </>
  )
}