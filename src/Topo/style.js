import styled from "styled-components";

const Header = styled.header`

background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

min-width: 100vw;
height: 80px;

position: fixed;
z-index: 1;

display: flex;
justify-content: space-between;
align-items: center;

padding-left: 5%;
padding-right: 5%;

span{
    font-family: 'Playball', cursive;
    font-size: 39px;
    color: #FFF;

}

img{
    height: 80%;
    border-radius: 80px;
    object-fit: contain;
}

`

export {Header}