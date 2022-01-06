import Login from "../Login"
import Cadastro from "../Cadastro";
import MainPage from "../MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){

    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>} ></Route>
                <Route path='/cadastro' element={<Cadastro/>} ></Route>
                <Route path='/habitos' element={<MainPage/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}