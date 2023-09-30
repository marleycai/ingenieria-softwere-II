const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {
  console.log('Connected to server.');
});

socket.addEventListener('message', (event) => {
  console.log('Message from server:', event.data);
  // Procesar mensajes del servidor y actualizar el juego
});

// Función para enviar mensajes al servidor
function sendMessage(message) {
  socket.send(message);
}
