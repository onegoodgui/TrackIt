
import Topo from "../Topo"
import { PageContainer } from "../MainPage/style";
import { Footer, ProgressCircle } from "../Menu/style";
import { CalendarStyle, DayContainer, Title } from "./style";
import { useContext, useEffect, useState} from "react";
import { ValueContext } from "../App";
import axios from "axios";
import { Link } from "react-router-dom";
import 'dayjs/locale/pt-br'
import dayjs from "dayjs";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


export default function Historico(){

    const [historico, setHistorico] = useState([]);
    const [completionArray, setCompletionArray] = useState([]);
    const {value, setValue} = useContext(ValueContext);
    const [locale, setLocale] = useState([]);
    const [habitsDates, setHabitsDates] = useState([]);
    const [habitsData, setHabitsData] = useState([]);
    


    let data = localStorage.getItem('data');
    data = JSON.parse(data);

    const config = {
        headers: {
            'Authorization' : `Bearer ${data.token}`
        }
    }

    useEffect(() => {
        const req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily', config);

        req.then(resposta => {
            let count = 0;
            let dummyObject = {date:'', status:''};

            for(let i=0; i<resposta.data.length; i++){
                habitsDates.push(resposta.data[i].day);

                for(let k=0; k<resposta.data[i].habits.length; k++){

                    if(resposta.data[i].habits[k].done === true){
                        count++
                    }
                }
                if(count === resposta.data[i].habits.length){
                    completionArray.push('completo');
                }
                else{
                    completionArray.push('incompleto');
                }
                count = 0;
                dummyObject.date = habitsDates[i];
                dummyObject.status = completionArray[i];
                habitsData[i] = {...dummyObject};
                
            }

            setHistorico(resposta.data);
            
        });

    },[])

    function marcarData(locale, date, habitos){

        let dia = (date.getDate());
        let mes = (date.getMonth());
        let ano = (date.getFullYear());

        let data = `${ano}-${mes+1}-${dia}`;
        data = dayjs(data).format('DD/MM/YYYY');

        let index = -1;

        for(let i=0; i<habitos.length; i++){
            if(data === habitos[i].date){
                index = i;
            }
        }



        return(
            <>
            <DayContainer color={ index < 1 ? 'transparent' : habitos[index].status === 'completo' ? '#74F149' : '#FF5733'}>
                <div className="circle">
                    {dia}
                </div>
            </DayContainer>
            </>
        )

    }

    return(
        <>
            <Topo/>
            <PageContainer>

           

            <Title>
                Histórico
            </Title>
            <CalendarStyle >
                <Calendar locale="pt-br" formatDay={(locale, date) => marcarData('pt-br', date, habitsData)} calendarType="US"/>
            </CalendarStyle>

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


