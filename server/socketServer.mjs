import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

const port = process.env.PORT || 3000;

let activeSessions = 0;

io.on('connection', socket => {
  console.log('Client connected');

  activeSessions++;
  console.log('Active Sessions:', activeSessions);
  io.emit('active_sessions', activeSessions);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    activeSessions--;
    console.log('Active Sessions:', activeSessions);
    io.emit('active_sessions', activeSessions);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
