import React from "react";
import './Chatwebsockect.css';
//import {IoSend} from "react-icons/ai";
import { GoPaperAirplane } from "react-icons/go";
import { useEffect, useState } from "react";

function Chatwebsockect (){
const [mensaje, setMensaje]= useState('');
const [mensajes, setMensajes] = useState<string[]>([]);
const [webSocket, setWebSocket] = useState<WebSocket | null >(null);
useEffect(() =>{
    const webSocket = new WebSocket('ws://localhost:8087');
    webSocket.onopen = ()=>{
        console.log('conectado');
    };
    webSocket.onmessage = (evento)=>{
        evento.data.text().then((mensaje:string)=>{
            console.log(mensaje);
            setMensajes((anterioresM)=>
            [...anterioresM, mensaje]);
        });
    };
    webSocket.onclose = ()=>{
        console.log('desconectado');
    };
    setWebSocket(webSocket);
    return ()=>{webSocket.close()};
},[]);
const sendMensaje =() =>{
    if(webSocket && mensaje.trim()){
        setMensajes((anteriorM)=>[...anteriorM, mensaje]);
        webSocket.send(mensaje);
        setMensaje('');
    }
}
    return(
        <>
        <div className="chat-container">
            <div className="chat-title">
                Titulo{/* titulo variable*/}
            </div>
            <div className="chat-messages">
                {mensajes.map((mensaje, index)=>(
                    <div className={"mensaje-azul"} key={index}>
                        {mensaje}
                    </div>
                    //continuar aqui
                ))}
                <div className={`message-green`}>
                    
                    <div className="message-time">
                        
                    </div>
                </div>
                <div className={`message.white`}>
                    
                    <div className="message-time">
                        
                    </div>
                </div>
            </div>
            <div className="chat-input-message">
                <input className="chat-text" 
                value={mensaje}
                onChange={(evento)=> setMensaje(evento.target.value)}
                onKeyDown={(evento)=>{
                    if(evento.key == 'Enter'){
                        sendMensaje();
                    }
                }}>  
                </input>
                <div onClick={sendMensaje} className="chat-send">
                    <GoPaperAirplane color="black" size="30"/>
                </div>
            </div>
        </div>
        </>
    );
}
export default Chatwebsockect;