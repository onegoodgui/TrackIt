import TrackIt from '../Images/TrackItLogo.svg'
import Container from '../Login/style'
import { Input, Button } from '../Login/style';
import {useState, useEffect} from 'react';
import { Loading } from '../Login';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


export default function Cadastro(){

    const [password,setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [data, setData] = useState([]);
    const [buttonContent, setButtonContent] = useState('Cadastrar');
    const [visibility, setVisibility] = useState(false);
    const [disable, setDisable] = useState(false);
    let navigate = useNavigate();

    const loginItems = [{placeholder: 'email', type: 'email', state: setEmail}, 
    {placeholder: 'senha', type: 'password', state: setPassword},
    {placeholder: 'nome', type: 'text', state: setName},
    {placeholder: 'foto', type: 'url', state: setImage}];

    function RequestSignUp(){

        const user = {email: email, name: name, image: image, password: password, };
        
            const requisicao = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', user);

            requisicao.then(resposta => {
                console.log(resposta.data);
                setData(resposta.data)});
                navigate('/')

            requisicao.catch(() => {
                setButtonContent('Entrar');
                setVisibility(false);
                setDisable(false);
                alert('Essa conta já possui login!')});

            if(data.length === 0){
                setButtonContent(null);
                setVisibility(true);
                setDisable(true);
                
            }

    }

return(
    <Container>
        <img src={TrackIt}></img>

        <form method='post'>
            {loginItems.map((item) => <Input disabled={disable} placeholder={item.placeholder} type={item.type} onChange={(e) => item.state(e.target.value)}></Input> )}
        </form>

        <Button onClick={() => RequestSignUp()} disabled={disable}> {buttonContent}
            <Loading
                type="ThreeDots"
                color="#FFF"
                height={40}
                width={40}
                visible = {visibility}
            />
        </Button>

        <Link to={`/`}> 
            <p>Já tem uma conta? Faça login!</p>
        </Link>
    </Container>
)
}