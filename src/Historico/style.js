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

position: relative;

.react-calendar{
    height: 60%;
    width: 90%;
    border-radius: 5px;
    border: none;

    margin: 0 auto 20px auto;
}

.react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus{
    background-color: inherit;
    color: black;
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

const SelectedHabit = styled.div`

background-color: lightblue;

width: 60vw;
height: 45vw;

margin: 0 auto;
padding: 5% 0;

position: absolute;
overflow-y: scroll;
z-index: 2;

top:30%;
left:20%;

opacity: 0.9;
display:${props => props.display};
flex-direction: column;
align-items: center;

gap: 5px;

border-radius: 5px;

.container {

    width:80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 5px;
}
p{
    display:flex;
    align-items: center;

    color: black;
    height:fit-content;
    width: 70%;
}
`

export {Title, CalendarStyle, SelectedHabit, DayContainer};