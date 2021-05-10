import styled from "styled-components";

export const Spinner = styled.div`
    position: relative;
    width: 130px;
    height: 130px;
    
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      border-width: 4px;
      border-style: solid;
      border-radius: 50%;
    }
    
    @keyframes scale-2 {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    
    50% {
      transform: scale(0.7);
      opacity: 1;
    }
    
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  
  &:before {
    width: 120px;
    height: 120px;
    border-color: #FFF;
    top: 0;
    left: 0;
    animation: scale-2 1s linear 0s infinite;
  }
  
  &:after {
    width: 120px;
    height: 120px;
    border-color: #FFF;
    top: 0;
    left: 0;
    opacity: 0;
    animation: scale-2 1s linear 0.5s infinite;
  }
`
