
import styled from 'styled-components';


const Container = styled.div`

    width: 100vw;
    min-height: 100vh;

    gap: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        height: fit-content;
        margin-top: 10vh;
        margin-bottom: 5vh;
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        
    }

    p{
        margin-top: 3vh;

        color: #52B6FF;

        text-decoration: underline;
    }
`

const Input = styled.input`

    height: 45px;
    width: 90vw;
    max-width: 300px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    padding-left: 10px;

    color: #AFAFAF;
    font-size: 20px;


    :: placeholder{
        color: #DBDBDB;
    }

    input:disabled {
        background: #F2F2F2;
      }
`
const Button = styled.button`

    background-color: #52B6FF;

    height: 45px;
    
    width: 90vw;
    max-width: 300px;

    border-radius: 5px;
    border-color: #52B6FF;
    border-style: none;

    padding-left: 10px;

    font-size: 20px;
    color: white;
    opacity: ${props => props.disabled === true ? 0.7 : 1};
   
`

export default Container;
export {Input, Button};