import axios from 'axios'
import { useEffect, useState } from 'react'
import { Menu } from '../../components/Menu'
import { CommunityList } from '../../components/CommunityList'

export const Community = () => {
  const [comunidade, setComunidade] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.get(`https://kenziehub.me/users?per_page=9&page=${currentPage}`)
      .then(resp => setComunidade([...comunidade, ...resp.data]))
      // eslint-disable-next-line
  }, [currentPage])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log('Eleento esta visivel')
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    })

    intersectionObserver.observe(document.querySelector('#sentinela'))

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      <Menu />
      <CommunityList>
        <ul>
          {comunidade.map((elm, idx) => 
            <li key={elm.id}>
              <h2>{elm.name.toLowerCase()}</h2>
              <img src={elm.avatar_url ? elm.avatar_url : `https://picsum.photos/id/${idx}/100`} alt="Foto de perfil" />
              <p>{elm.course_module}</p>
              <div className='techs'>
                <h2>My techs:</h2>
                <p>
                  {elm.techs.length === 0 ? "No techs informed" : elm.techs.map((elm, idx, arr) => (arr.length - 1) === idx ? elm.title : `${elm.title}, `)}
                </p>
              </div>
            </li>
          )}
          <li id="sentinela"></li>
        </ul>
      </CommunityList>
    </>
  )
}