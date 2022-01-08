import { Header } from "./style"
import { DataContext } from "../App";
import { useContext } from "react";

export default function Topo(){

    let data = localStorage.getItem('data');
    data = JSON.parse(data);

    return(
    
    <Header>
        <span>TrackIt</span>
        <img src={data.image}></img>
    </Header>)
}