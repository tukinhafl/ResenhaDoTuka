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
            aquele que come doritos o dia inteiro e joga LOL? Isso, você, aqui
            é onde você pode se livrar deste mundo cruel e maligno e aproveitar 
            pra criar vergonha na cara e estudar algumas tecnologias que poderão 
            mudar a sua vida em um futuro não tao distante. <br/>
            Ah, você não acredita em mim né? Então porque não tenta se cadastrar 
            clicando no menu ao lado na aba <Link to='/register'>Register</Link> e depois faça 
            Login e crie seu <i>Dashboard</i> personalizado para ir adicionado de tempos 
            em tempos as tecnologias que você aprendeu e seus avanços continuos? Gostou? <br/>
            <strong>É FACIL, É UTIL, É A RESENHA DO TUKA!</strong>
          </p>
        </div>
        <Fireworks ok={true}/>
      </Landing>
    </>
  )
}