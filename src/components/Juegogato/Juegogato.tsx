import React from "react";
import Celdagato from "../Celdagato/Celdagato";
import { table } from "console";
function Juegogato(){
    return(
        /*
        body
        3 columnas o 3 filas
        cada columna o fila 3 <celdagato/>
        div
            div
            /div
        /div

        tr es para columnas y td es para filas
        */
       <table className="tabla">
        
        <tr><td className="h1">x</td><td>x</td><td>x</td></tr>
        <tr><td>x</td><td>x</td><td>x</td></tr>
        <tr><td>x</td><td>x</td><td>x</td></tr>
       </table>
       
    );
}
export default Juegogato;