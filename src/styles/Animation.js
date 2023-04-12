
import { keyframes } from "@emotion/react";
import { Fade,Reveal } from "react-awesome-reveal";


  export  const topAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(-0);
  }
`
export  const rightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`
export  const leftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(-0);
  }
`
export  const bottomAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`