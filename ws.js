const WebSocket = require('ws');

const wss = new WebSocket.Server({port:8087})
wss.on('connection:', (ws)=>{
    console.log('nueva conexión');
    ws.on('MENSAJE:',(data)=>{
        console.log(`mensaje:${data}`); //comillas invertidas

    wss.clients.forEach((cliente)=>{
        if(cliente !== ws && cliente.readyState === WebSocket.OPEN){
            cliente.send(data);
        }
    });
    });
    //cerrar sesion
    ws.on('close',()=>{
        console.log('Usuario desconectado');
    });
});

console.log('WS funcionando');