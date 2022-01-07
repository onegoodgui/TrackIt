import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const PageContainer = styled.div`

background-color: #F2F2F2;

width: 100vw;
height: 100vh;

display:flex;
flex-direction:column;
align-items: center;

p{
    width: 90vw;

    color: #666666;
    font-size: 18px;
    line-height: 22px;


}
`
const Title = styled.div`

width: 90vw;
max-width: 500px;
height: 10vh;

margin-top: 80px;

display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

span{
    color: #126BA5;

    font-size: 23px;
}

button{
    background-color: #52B6FF;
    color: #FFF;

    width: 40px;
    height: 35px;

    border-radius: 5px;
    border-color: #52B6FF;
    border-style: none;

    font-size: 25px;

    display: flex;
    justify-content: center;
}

`

const Footer = styled.footer`

width: 100vw;
height: 80px;

position: fixed;
bottom: 0;

background-color: #FFF;

padding: 0 10vw;

display: flex;
align-items: center;
justify-content: space-between;

span{
    color: #52B6FF;

    font-size: 18px;
}
`

const ProgressBarContainer = styled.div`
height: ${props => props.diameter};
width: ${props => props.diameter};

text-anchor: middle;
dominant-baseline: middle;
stroke-linecap: round;

margin-bottom: 60px;
`

export{PageContainer, Title, Footer, ProgressBarContainer}