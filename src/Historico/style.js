import styled from "styled-components";

const Title = styled.div`

padding-top: 100px;
margin-bottom: 10px;
width: 90%;

display: flex;
flex-direction: column;
justify-content: flex-start;

font-size: 23px;
color: #126BA5;

span{
    margin-top: 30px;
    margin-bottom: 30px;

    font-size: 18px;
    color: #666666;
}
`

const CalendarStyle = styled.div`



.react-calendar{
    height: 60%;
    width: 90%;
    border-radius: 5px;
    border: none;

    margin: 0 auto 20px auto;
}

`

const DayContainer = styled.div`

display: flex;
justify-content: center;
align-items: center;

.circle{
    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;

    border-radius: 50%;

    background-color: ${props => props.color};
}

`

export {Title, CalendarStyle, DayContainer};