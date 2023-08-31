import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

function TopMenu() {
  const [activeSessions, setActiveSessions] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const socket = io.connect('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('active_sessions', sessions => {
      console.log('Received active sessions:', sessions);
      setActiveSessions(sessions);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      socket.close();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="top-menu">
      <div className="date-time">{currentDateTime.toLocaleString()}</div>
      <div className="active-sessions">Active Sessions: {activeSessions}</div>
    </div>
  );
}

export default TopMenu;
