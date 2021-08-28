import styled from 'styled-components'

export const Landing = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  flex-wrap: wrap;
  z-index: 1;

  div {
    width: 550px;
    height: 600px;
    padding: 30px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    
    h1, h2, p {
      color: white;
      text-align: center;
      width: 100%;
    }

    h1 {
      margin-bottom: 80px;
      height: 30px;
      font-size: 2.5rem;
      letter-spacing: 3px;
      text-shadow: 2px 2px 5px black;
    }

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    p {
      line-height: 1.45rem;
      font-size: 1.25rem;
      padding: 15px;

      a {
        color: black;
        opacity: 0.7;

        :hover {
          opacity: 1;
        }
      }

      strong {
        color: black;
      }
    }
  }
`