import Topo from "../Topo"
import { PageContainer, Title, Footer, ProgressBarContainer } from "./style"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { DataContext } from "../App";
import { useContext } from "react";

export default function MainPage(){

    let data = localStorage.getItem('data');
    data = JSON.parse(data);
    console.log(data);

    return(
        <>
        <Topo/>
        <PageContainer>
            <Title>
                <span>Meus Hábitos</span>
                <button>+</button>
            </Title>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            <Footer>
                <span> Hábitos </span>
                    <ProgressCircle value={'0'} text={'Hoje'} diameter={'80px'}/>
                <span> Histórico </span>
            </Footer>
        </PageContainer>
        </>
        )
}


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