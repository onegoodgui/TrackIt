import TrackIt from '../Images/TrackItLogo.svg'
import LoginContainer from '../Login/style'
import { Input, Button } from '../Login/style';

export default function Login(){

    const loginItems = [{placeholder: 'email', type: 'email'}, {placeholder: 'senha', type: 'password'}];
    return(
        <LoginContainer>

            <img src={TrackIt}></img>
            <form>
                {loginItems.map((item) => <Input placeholder={item.placeholder} type={item.type}></Input> )}
                <Button>Entrar</Button>
            </form>
                <a>Não tem uma conta? Cadastre-se!</a>


        </LoginContainer>
    )
}