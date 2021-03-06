import Topo from "../Topo"
import { PageContainer } from "../MainPage/style";
import { Footer, ProgressCircle } from "../Menu/style";
import { DiaDeHoje, Habito, CurrentCount, HighestCount, CheckBox } from "./style";
import { useContext, useState, useEffect, } from "react";
import { ValueContext } from "../App";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import 'dayjs/locale/pt-br'
import dayjs from "dayjs";


export default function Hoje(){

    let navigate = useNavigate();
    const [habitosData, setHabitosData] = useState([]);
    const {value, setValue} = useContext(ValueContext); 
    require('dayjs/locale/pt-br');
    dayjs.locale('pt-br');


    let data = localStorage.getItem('data');
    data = JSON.parse(data);

    setTimeout(() => {
        localStorage.removeItem('data');
        navigate('/');
    }, 1000*60);

    const config = {
        headers: {
            'Authorization' : `Bearer ${data.token}`
        }
    }

    useEffect(() =>{
        const req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
        req.then(resposta => {

            let count= 0;
            for(let i=0; i<resposta.data.length; i++){
                if(resposta.data[i].done === true){
                    count++;
                }
            }

            setValue(Math.round((count/(resposta.data.length))*100));

            setHabitosData(resposta.data);

           
        })
        
    },[])

function toggleHabito(habito){

    let req = '';

    if(habito.done === false){
        
        req = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/check`,'', config);
        req.then( () => {
            
            req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            req.then(resposta => {
                setHabitosData(resposta.data)

                let count= 0;
                for(let i=0; i<resposta.data.length; i++){
                    if(resposta.data[i].done === true){
                        count++;
                    }
                }
    
                setValue(Math.round((count/(resposta.data.length))*100));
            })
        }
            
        );
    }
    else{
        req = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habito.id}/uncheck`,'', config);
        req.then(() => {

            req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            req.then(resposta => {
                setHabitosData(resposta.data)

                let count= 0;
                for(let i=0; i<resposta.data.length; i++){
                    if(resposta.data[i].done === true){
                        count++;
                    }
                }
    
                setValue(Math.round((count/(resposta.data.length))*100));
            })
        });
    }
}


    return(
    <>
        <Topo></Topo>
        <PageContainer>

            <DiaDeHoje color={value !== 0 ? '#8FC549' : '#BABABA' }>
                {dayjs().format('dddd D/MM')}
                <span> { value !== 0 ? `${value}% dos h??bitos conclu??dos` : 'Nenhum h??bito conclu??do ainda'} </span>
            </DiaDeHoje>

            {habitosData.map((habito) => {

                return(
                <Habito key={habito.id}>
                    <div className="Text">
                        {habito.name}
                        <div className="Sequencia">
                            <span> Sequencia atual: <CurrentCount color={ habito.done === false ? '#666666' : '#8FC549'}>{habito.currentSequence} {habito.currentSequence === 1 ? 'dia' : 'dias'}</CurrentCount></span>
                            <span> Sequencia atual: <HighestCount color = {habito.currentSequence < habito.highestSequence ? '#666666' : habito.highestSequence === 0 ? '#666666' : '#8FC549'}>{habito.highestSequence} {habito.highestSequence === 1 ? 'dia' : 'dias'}</HighestCount></span>
                        </div>
                    </div>
                        <CheckBox onClick={() => toggleHabito(habito)} color={habito.done === false ? '#EBEBEB' :  '#8FC549'} height={'100%'} width={'100%'} style={{borderRadius: '5px', verticalAlign: 'middle'}}/>
                </Habito>
                )
            })}
            
            <Footer>
                <Link to={'/habitos'}>
                    <button> H??bitos </button>
                </Link>

                <Link to={'/hoje'}>
                    <ProgressCircle value={value} text={'Hoje'} diameter={'80px'}/>
                </Link>

                <Link to={'/historico'}>
                    <button> Hist??rico </button>
                </Link>
            </Footer>
        </PageContainer>
    </>
    )
}

