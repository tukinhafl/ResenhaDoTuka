import styled, { keyframes } from 'styled-components'

const explosion = keyframes`
  0% 
  {
    top: 100%;
  }
  33%, 100% {
    top: -50%;
  }
`

const Foguetes = styled.section`
  width: 90%;
  height: 90%;
  display: flex;

  .firework {
    position: absolute;
  }

  .explosion {
      position: absolute;
      left: -2px;
      bottom: 0;
      width: 4px;
      height: 80px;
      transform-origin: 50% 100%;
      overflow: hidden;
  }

  .explosion:nth-child(1) {
      transform: rotate(0deg) translateY(-15px);
  }
  .explosion:nth-child(2) {
      transform: rotate(30deg) translateY(-15px);
  }
  .explosion:nth-child(3) {
      transform: rotate(60deg) translateY(-15px);
  }
  .explosion:nth-child(4) {
      transform: rotate(90deg) translateY(-15px);
  }
  .explosion:nth-child(5) {
      transform: rotate(120deg) translateY(-15px);
  }
  .explosion:nth-child(6) {
      transform: rotate(150deg) translateY(-15px);
  }
  .explosion:nth-child(7) {
      transform: rotate(180deg) translateY(-15px);
  }
  .explosion:nth-child(8) {
      transform: rotate(210deg) translateY(-15px);
  }
  .explosion:nth-child(9) {
      transform: rotate(240deg) translateY(-15px);
  }
  .explosion:nth-child(10) {
      transform: rotate(270deg) translateY(-15px);
  }
  .explosion:nth-child(11) {
      transform: rotate(300deg) translateY(-15px);
  }
  .explosion:nth-child(12) {
      transform: rotate(330deg) translateY(-15px);
  }

  .explosion::before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 100%;
      height: 40px;
      background-image: linear-gradient(0deg, rgba(255,246,183,1)0%,rgba(246,65,108,1) 83%);
  }

  #firework1 {
        left: 50%;
        top: 50%;
        transform: scale(1);
    }

  .explosion::before {
    animation: ${explosion} 2s ease-in-out;
    animation-iteration-count: 4;
  }

  #firework2 {
    left: 40%;
    top: 45%;
    transform: scale(.7);
  }
  

  #firework3 {
    left: 60%;
    top: 65%;
    transform: scale(.4);
  }
  
  #firework4 {
    left: 5%;
    top: 5%;
    transform: scale(.5);
  }
  
  #firework5 {
  right: 25%;
  top: 15%;
  transform: scale(.8);
  }
  
  #firework6 {
  right: 15%;
  top: 85%;
  transform: scale(.5);
  }
`

export const Fireworks = () => {
  return (
    <Foguetes>
        <span className="firework" id="firework1">
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
        </span>
        <span className="firework" id="firework2">
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
        </span>
        <span className="firework" id="firework3">
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
        </span>
        <span className="firework" id="firework4">
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
        </span>
        <span className="firework" id="firework5">
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
        </span>
        <span className="firework" id="firework6">
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
            <span className="explosion"></span>
        </span>
    </Foguetes>

  )
}