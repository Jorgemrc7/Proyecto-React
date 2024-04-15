import React from "react";
import { useState } from "react";
import './Button.css'
//tsx
interface Datos{
    texto:string;
    color:string;
}

//
function Button({texto, color}:Datos){
    const [contador, setContador]= useState(0); //se elige desde donde empezar
    const nombre=`mi-boton ${color}`; //comillas invertidas
    const [gatoEstado, setGatoEstado]=
    useState('-');
    const cambiarEstado= ()=>{
        setGatoEstado(valor=>{
            if (valor === '-')return 'X';
            if (valor === 'X')return 'O';
            return '-';
            // if variable == '' return 'X'
            // if variable == 'X' return 'O';
            // if variable == 'O' return 'X';
        });
    };
    const sumar= ()=>{
        setContador(variable=>{
            return(variable+1); // sumar cuantos 
        });

    };
    return(
        // cambiar entre sumar-------------------------- cambiar gatEstado a contador
        <div onClick={cambiarEstado} className={nombre}>{gatoEstado}</div>
    );
}
export default Button;