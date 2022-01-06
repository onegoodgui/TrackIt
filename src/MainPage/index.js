import Topo from "../Topo"
import { PageContainer, Title } from "./style"

export default function MainPage(){

    return(
        <>
        <Topo/>
        <PageContainer>
            <Title>
                <span>Meus Hábitos</span>
                <button>+</button>
            </Title>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
        </PageContainer>
        </>
        )
}
