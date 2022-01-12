
import Topo from "../Topo"
import { PageContainer } from "../MainPage/style";
import { Footer, ProgressCircle } from "../Menu/style";
import { CalendarStyle, DayContainer, SelectedHabit, Title } from "./style";
import { useContext, useEffect, useState} from "react";
import { ValueContext } from "../App";
import axios from "axios";
import { Link } from "react-router-dom";
import 'dayjs/locale/pt-br'
import dayjs from "dayjs";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { CheckmarkCircleOutline } from 'react-ionicons';
import { CloseCircleOutline } from 'react-ionicons'


export default function Historico(){

    const [historico, setHistorico] = useState([]);
    const [completionArray, setCompletionArray] = useState([]);
    const {value, setValue} = useContext(ValueContext);
    const [locale, setLocale] = useState([]);
    const [habitsDates, setHabitsDates] = useState([]);
    const [habitsData, setHabitsData] = useState([]);
    const [selected, setSelected] = useState('none');
    const [indexValue, setIndexValue] = useState('-1');

    let habitsList = [];
    let statusList = [];
    let indexDummy = 0;


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
            let dummyObject = {date:'', status:'', habits:{name:'', status:''}};

            for(let i=0; i<resposta.data.length; i++){
                habitsDates.push(resposta.data[i].day);
                habitsList[i] = resposta.data[i].habits.map((habits) => habits.name)
                statusList[i] = resposta.data[i].habits.map((habits) => habits.done)
                count = 0;
                
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
                
                dummyObject.date = habitsDates[i];
                dummyObject.status = completionArray[i];
                dummyObject.habits.name = habitsList[i];
                dummyObject.habits.status = statusList[i];
                console.log(dummyObject);
                habitsData.push({...dummyObject});
                habitsData[i].habits = {...dummyObject.habits};
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
            <DayContainer  onChange={null} color={ index < 1 ? 'transparent' : habitos[index].status === 'completo' ? '#74F149' : '#FF5733'}>
                <div className="circle">
                    {dia}
                </div>
            </DayContainer>
            </>
        )

    }

    function mostrarHabitos(date, habitos){

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

        indexDummy = index;

        if(index >= 0){
            setIndexValue(index);
            setSelected('flex');
        }
    }

    function ListarHabitos({index}){

        if(index>0){

            let habits, status = [];
            habits = habitsData[index].habits.name.map((habito) => habito);
            status = habitsData[index].habits.status.map((status) => status);
            return(
                <>
                    {habits.map((habit,index) => {
                        const statusValue = status[index];
                        return(
                            <div className="container"> <p>{habit}</p> {statusValue === false? <CloseCircleOutline color={'#BE3535'}/> : <CheckmarkCircleOutline color={'#58BE35'}/>}</div>
                        )
                    })}
                </>
            )
        }
        else{
            return(
                <>
                </>
            )
        }
    }


    return(
        <>
            <Topo/>
            <PageContainer>

           

            <Title>
                Histórico
            </Title>
            <CalendarStyle onClick={() => indexDummy < 0 ? setSelected('none') : setSelected('flex')} >
                <Calendar locale="pt-br" formatDay={(locale, date) => marcarData('pt-br', date, habitsData)} calendarType="US" onClickDay={(value) => mostrarHabitos(value, habitsData)}/>
                <SelectedHabit  display={selected}>
                    
                        <ListarHabitos index={indexValue}></ListarHabitos>
                    
                </SelectedHabit>
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


