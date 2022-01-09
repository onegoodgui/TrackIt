import Login from "../Login"
import Cadastro from "../Cadastro";
import MainPage from "../MainPage";
import Hoje from "../Hoje";
import { useState ,createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ValueContext = createContext();
export {ValueContext};

export default function App(){

    const [value, setValue] = useState('');

    return(
        <>
        <ValueContext.Provider value={{value, setValue}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} ></Route>
                    <Route path='/cadastro' element={<Cadastro/>} ></Route>
                    <Route path='/habitos' element={<MainPage/>}></Route>
                    <Route path='/hoje' element={<Hoje/>}></Route>
                </Routes>
            </BrowserRouter>
        </ValueContext.Provider>
        </>
    )
}