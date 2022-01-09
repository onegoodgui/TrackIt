
import Topo from "../Topo"
import { PageContainer } from "../MainPage/style";
import { Footer, ProgressCircle } from "../Menu/style";
import { Title } from "./style";
import { useContext} from "react";
import { ValueContext } from "../App";
import { Link } from "react-router-dom";
import 'dayjs/locale/pt-br'
import dayjs from "dayjs";


export default function Historico(){

    const {value, setValue} = useContext(ValueContext);
    return(
        <>
            <Topo/>
            <PageContainer>

            <Title>
                Histórico
                <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
            </Title>

            <Footer>
                <Link to={'/habitos'}>
                    <button> Hábitos </button>
                </Link>

                <Link to={'/hoje'}>
                    <ProgressCircle value={value} text={'Hoje'} diameter={'80px'}/>
                </Link>

                <Link to={'/historico'}>
                    <button> Histórico </button>
                </Link>
            </Footer>  
            </PageContainer>
        </>
    )
}