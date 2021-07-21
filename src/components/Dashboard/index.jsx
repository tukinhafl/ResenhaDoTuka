import styled from "styled-components";

export const Dashboard = styled.div`
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  height: 80vh;
  width: 80vw;
  position: relative;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  backdrop-filter: blur(5px);

  .modal {
    position: absolute;
    opacity: 0.9;
    width: 100%;
    height: 100%;
    background-color: gray;

    span {
      top: 20px;
      right: 20px;
      position: absolute;
      height: 35px;
      width: 35px;
      background: red;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.75rem;
      cursor: pointer;
    }

    div {
      position: absolute;
      height: 300px;
      width: 400px;
      background: #00000081;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;

        select {
          font-size: 1rem;
          width: 100%;
          height: 40px;
          border-radius: 10px;
          background: #cac9c9;
        }

        button {
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          margin-top: 40px;
          width: 100%;
          height: 50px;
          background: gray;
          border: none;
          border-radius: 10px;

          :hover {
            box-shadow: 0 0 3px 3px #0000008f;
            filter: brightness(1.2);
          }
        }
      }
    }
  }

  div {
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    padding: 25px;
    color: white;
    height: 50%;

    img {
      border-radius: 100%;
      height: 200px;
      width: 200px;
    }
  }

  .info {
    justify-content: flex-start;
    text-align: center;
    flex-direction: column;

    h1 {
      padding: 20px;
    }
  }

  .bio {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2rem;
  }

  section {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    overflow: auto;

    ul {
      height: 100%;
      display: flex;
      /* scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      --webkit-overflow-scrolling: touch; */
    }
    
    li {
      position: relative;
      height: 80%;
      width: 200px;
      margin: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;

      span {
        font-size: 30px;
        color: gray;
        cursor: pointer;
      }

      button {
        cursor: pointer;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: none;
        background: gray;
        font-size: 4rem;
        height: 80px;
        width: 80px;
        border-radius: 100%;
      }

      img {
        padding: 15px;
        height: 50%;
        width: 100%;
      }

      p {
        padding: 15px;
        color: white;

        :nth-child(2) {
          color: white;
          font-size: 1.5rem;
        }
      }
    }
  }
`
