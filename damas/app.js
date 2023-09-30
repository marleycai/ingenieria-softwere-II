const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Ruta raíz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


// Conexiones WebSocket
wss.on('connection', (ws) => {
    console.log('Cliente WebSocket conectado');

    // Manejo de mensajes desde el navegador
    ws.on('message', (message) => {
        console.log(`Mensaje recibido del navegador: ${message}`);

        // // Analizar el mensaje JSON
        // const data = JSON.parse(message);
        // const { ccNumber, ccValue } = data;

        // // Enviar el mensaje MIDI CC al dispositivo seleccionado
        // sendMidiCC(ccNumber, ccValue);
    });
});

// Iniciar el servidor en el puerto 3001
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Servidor Node.js escuchando en el puerto ${PORT}`);
});