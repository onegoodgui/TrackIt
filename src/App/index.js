import Login from "../Login"
import Cadastro from "../Cadastro";
import MainPage from "../MainPage";
import { useState ,createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const DataContext = createContext();
export {DataContext};

export default function App(){

    const[data, setData] = useState([]);

    return(
        <>
        <DataContext.Provider value={{data, setData}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>} ></Route>
                    <Route path='/cadastro' element={<Cadastro/>} ></Route>
                    <Route path='/habitos' element={<MainPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </DataContext.Provider>
        </>
    )
}