import { createServer } from 'http';
import socketIo from 'socket.io';

const server = createServer();
const io = socketIo(server);

const port = process.env.PORT || 3000;

let activeSessions = 0;

io.on('connection', socket => {
  console.log('Client connected');

  activeSessions++;
  io.emit('active_sessions', activeSessions);

  socket.on('disconnect', () => {
    console.log('Client disconnected');
    activeSessions--;
    io.emit('active_sessions', activeSessions);
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
