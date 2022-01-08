import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const PageContainer = styled.div`

background-color: #F2F2F2;

width: 100vw;
height: fit-content;

padding-bottom: 100px;

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

const NovoHabito = styled.div`

display: ${props => props.display === true? 'flex' : 'none'};

width: 90vw;
height 180px;

background-color: #FFF;
border-radius: 5px;

flex-direction: column;

padding: 5%;
margin-bottom: 30px;

position: relative;

input{
    width: 100%;
    height: 45px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    margin-bottom: 10px;

    padding-left: 10px;

    color: #AFAFAF;
    font-size: 20px;

}

div{
    width: 80%;
    height: 30px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;


    button.cancelar{
        background-color: #FFF;

        font-size: 16px;
        color: #52B6FF;

        height: 30px;
        width:fit-content;

        margin-right: 5%;
        margin-bottom:5%;

        position: absolute;
        right: 30%;
        bottom: 0;

        border: none;
    }

    button.salvar{
        background: #52B6FF;
        

        font-size: 16px;
        color: #FFF;

        height: 30px;
        width:fit-content;

        padding: 2px 15px;
        margin-right: 5%;
        margin-bottom:5%;

        position: absolute;
        right: 0%;
        bottom: 0;

        border: 1px solid #52B6FF;
        border-radius: 5px;
    }
}

`

const Botao = styled.button`

    color: ${props => props.selecionado === true ? '#FFF' : '#D5D5D5'};
    font-size: 20px;

    height: 100%;
    width: 30px;

    background-color: ${props => props.selecionado === true? '#D5D5D5' : '#FFF'};
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    gap: 10px;

`

const Habito = styled.div`


color: #666666;
font-size: 20px;

width: 90vw;
height 90px;

background-color: #FFF;
border-radius: 5px;

display: flex;
flex-direction: column;

padding: 5%;
margin-bottom: 30px;

position: relative;

div{
    width: 80%;
    height: 30px;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

`

export{PageContainer, Title, Footer, ProgressBarContainer, NovoHabito, Habito, Botao}