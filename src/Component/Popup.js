import { useEffect } from "react"
import styled, { keyframes } from "styled-components";

const PopupMessage= ({message , onclose}) =>{
    useEffect(()=>{
        const timer = setTimeout(()=>{
            onclose();
        },3000);

        return ()=> clearTimeout(timer)
    },[onclose]);

    return(
        <PopupLebel>
            <MessageContent>{message}</MessageContent>
        </PopupLebel>
    )
};

export default PopupMessage;


const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;



const PopupLebel= styled.div`
    position: fixed;
    top :120px;
    right: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    z-index:999;
    animation: ${slideInRight} 0.5s ease-in-out;
`;


const MessageContent = styled.div`
    color: #333;
`



