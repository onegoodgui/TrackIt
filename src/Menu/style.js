import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

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

button{
    color: #52B6FF;

    font-size: 18px;

    background-color: transparent;
    border: none; 
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

function ProgressCircle({value, text, diameter}){
    return(
        <ProgressBarContainer diameter={diameter}>
            <CircularProgressbar
            value={value}
            text={text}
            background
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
            })}
            />

        </ProgressBarContainer>
    )
}

export{Footer, ProgressCircle}