import styled from "styled-components";
import { Checkbox } from 'react-ionicons'

const DiaDeHoje = styled.div`

padding-top: 100px;
width: 90%;

display: flex;
flex-direction: column;
justify-content: flex-start;

font-size: 23px;
color: #126BA5;

span{
    margin-top: 5px;
    margin-bottom: 30px;

    font-size: 18px;
    color:${props => props.color};
}
`

const Habito = styled.div`


color: #666666;
font-size: 20px;

width: 90vw;
height 95px;

background-color: #FFF;
border-radius: 5px;

display: flex;
justify-content: space-between;

padding:1%;
margin-bottom: 30px;

position: relative;

div.Text{
    padding-left: 3%;
    padding-top: 3%;

    display: flex;
    flex-direction: column;

    div.Sequencia{

        margin-top: 10px;
        gap: 2px;
    
        display: flex;
        flex-direction: column;
    
        font-size: 13px;
    
    }
}
`

const HighestCount = styled.span`

color: ${props => props.color};
`

const CurrentCount = styled.span`

color: ${props => props.color};
`

function CheckBox({color, height, width, style, onClick}){
    return(
        <Checkbox
            color={color} 
            height={height}
            width={width}
            style={style}
            onClick={onClick}
        />
    )
}
export {DiaDeHoje, Habito, HighestCount, CurrentCount, CheckBox};