import TrackIt from '../Images/TrackItLogo.svg'
import Container from '../Login/style'
import { Input, Button } from '../Login/style';
import {useState, useContext} from 'react';
import Loader from "react-loader-spinner";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';




export default function Login(){

    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [buttonContent, setButtonContent] = useState('Entrar');
    const [visibility, setVisibility] = useState(false);
    const [disable, setDisable] = useState(false);
    let navigate = useNavigate();

    const [data, setData] = useState([]);

    const loginItems = [{placeholder: 'email', type: 'email', state: setEmail}, {placeholder: 'senha', type: 'password', state: setPassword}];


    function RequestLogin(){

        const user = {email: email, password: password};
        
            const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', user);

            requisicao.then(resposta => {
                setData(resposta.data)
                localStorage.setItem('data', JSON.stringify(resposta.data));
                navigate('/hoje')});

            requisicao.catch(() => {
                setButtonContent('Entrar');
                setVisibility(false);
                setDisable(false);
                alert('Erro!')});

            if(data.length === 0 || data === null){
                setButtonContent(null);
                setVisibility(true);
                setDisable(true);
                
            }

    }

    useEffect(() => {

        let localData = localStorage.getItem('data');
        localData = JSON.parse(localData);
        if(localData !== null){
            navigate('/hoje');
        }
    },[])

    return(
            <Container>
                <img src={TrackIt}></img>
                <form method='post'>
                    {loginItems.map((item) => <Input disabled={disable} placeholder={item.placeholder} type={item.type} onChange={(e) => item.state(e.target.value)}></Input> )}
                </form>
                <Button onClick={()=> RequestLogin()} disabled={disable}> {buttonContent}
                    <Loading
                        type="ThreeDots"
                        color="#FFF"
                        height={40}
                        width={40}
                        visible = {visibility}
                    />
                </Button>
                <Link to={`/cadastro`}> 
                    <p href='/'>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </Container>
    )
}



function Loading({type, color, height, width, time, visible}){
    return(
        <Loader type={type} color={color} height={height} width={width} timeout={time} visible={visible}/>
    )
}

export {Loading};