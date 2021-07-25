import styled from 'styled-components'

export const CommunityList = styled.div`
  position: relative;
  width: 80vw;
  height: 90vh;
  margin: 30px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  /* overflow: hidden; */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1;

  ul {
    display: flex;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: #5c5b5b;
    }

    ::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 20px;
      border: 2px solid #5c5b5b;
    }

    li {
      border: 1px solid gray;
      padding: 10px;
      height: 40%;
      width: calc(100% / 3);
      text-align: center;

      .techs {
        box-sizing: border-box;
        height: 45%;
        display: flex;
        margin: 10px;
        padding: 10px;
        color: white;

        h2 {
          width: 50%;
          align-self: center;
        }

        p {
          width: 65%;
        }
      }
      
      p {
        align-self: center;
        padding: 0 15px;
        color: white;
      }

      img {
        margin: 10px;
        border-radius: 100%;
      }

      h2 {
        text-transform: capitalize;
      }
    }

    #sentinela {
      height: 5px;
      width: 100%;
      border: none;
    }
  }
`