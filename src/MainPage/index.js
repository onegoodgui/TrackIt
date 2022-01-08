import Topo from "../Topo"
import { PageContainer, Title, Footer, ProgressBarContainer, NovoHabito, Habito, Botao } from "./style"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { DataContext } from "../App";
import { useContext, useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import { Loading } from "../Login";
import axios from "axios";

export default function MainPage(){

    const [habito, setHabito] = useState('');
    const [visibilidade, setVisibilidade] = useState(true);
    const [days, setDays] = useState([{day:'D', status: false}, {day:'S', status: false}, {day:'T', status: false}, {day:'Q', status: false}, {day:'Q', status: false}, {day:'S', status: false}, {day:'S', status: false}]);
    const [buttonContent, setButtonContent] = useState('Salvar');
    const [loadingVisibility, setLoadingVisibility] = useState(false);
    const [disable, setDisable] = useState(false);
    const [emptyMessage, setEmptyMessage] = useState('Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!')
    const [requestData, setRequestData] = useState([]);
    const [listaHabitos, setListaHabitos] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);

    let data = localStorage.getItem('data');
    data = JSON.parse(data);

    const config = {
        headers: {
            'Authorization' : `Bearer ${data.token}`
        }
    }

    useEffect(() => {

        let req = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        req.then(resposta => {
            setListaHabitos(resposta.data)
            if(resposta.data !== 0){
                setEmptyMessage('');
                setVisibilidade(false);
            }
        });

    }
    ,[])
        
    console.log(listaHabitos);


    function selectDay(index, days){
        let auxDays = days;
        let auxIndex = 0;
        let indexArray = [];

        if(days[index].status === true){
            auxDays[index].status = false;
            setDays([...auxDays]);

            auxIndex = selectedDays.indexOf(index);
            selectedDays.splice(auxIndex,1);
            
        }

        else{
            auxDays[index].status = true;
            setDays([...auxDays]);

            indexArray = [...selectedDays, index];
            setSelectedDays(indexArray);
       
        }
    }

    function esconderHabito(){
            setVisibilidade(false);
    }


    function mostrarHabito(){
        setVisibilidade(true);
    }

    function enviarHabito(selectedDays, habito){

        let object = {name: habito, days: selectedDays};
        

        const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', object, config);

        requisicao.then(resposta => {
            
            setDisable(false);
            setVisibilidade(false);
            setButtonContent('Salvar');
            setLoadingVisibility(false);
            setHabito('');

            let auxDays = days;
            for(let i=0; i<days.length; i++){
                auxDays[i].status = false;
            }
            setDays([...auxDays]);
            setRequestData(resposta.data);

            listarHabitos();
        });

        requisicao.catch(err => console.log(err));

        if(requestData.length === 0){

            setButtonContent(null);
            setLoadingVisibility(true);
            setDisable(true);
            
        }
            
    }

    function listarHabitos(){

        let requisicao = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);

        requisicao.then(resposta => setListaHabitos(resposta.data));
    }

    function verifySelectedDays(day,index){
        console.log('entrou aqui!')
    }
    

    return(
        <>
        <Topo/>
        <PageContainer>

            <Title>
                <span>Meus Hábitos</span>
                <button onClick={() => mostrarHabito()} >+</button>
            </Title>

            <NovoHabito display={visibilidade}>
                <input disabled={disable} value={habito} onChange={(e) => setHabito(e.target.value)}></input>
                <div>
                    {days.map((day,index) =>{
                        return(<Botao disabled={disable} key={index} selecionado={day.status} onClick={() => {selectDay(index, days)}}> {day.day} </Botao>)
                    }
                    )}

                    <button className="cancelar" onClick={() => esconderHabito(days)}>Cancelar</button>
                    <button className="salvar" onClick={() => enviarHabito(selectedDays, habito)}>{buttonContent}
                        <Loading
                            type="ThreeDots"
                            color="#FFF"
                            height={20}
                            width={20}
                            visible = {loadingVisibility}
                        />
                    </button>
                </div>
            </NovoHabito>

            <p>{emptyMessage}</p>
            {listaHabitos.map((habito) => 
                <Habito key={habito.id}> {habito.name}
                    <div>
                        {days.map((day, index) => {
                            let selecionado = 0;
                            if(habito.days.includes(index)){
                                selecionado = true
                            }
                            else{
                                selecionado = false;
                            }

                            return(<Botao selecionado={selecionado}>{day.day}</Botao>)})
                        }
                    </div>
                </Habito>
            )}
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