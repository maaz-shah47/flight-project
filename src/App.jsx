import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import Login from "./components/login/Login";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import io from 'socket.io-client';
import config from './config';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    const socket = io('ws://127.0.0.1:3300', {
      transports: ['websocket'],
      upgrade: false,
      auth: {
        token: `Bearer ${jwtToken}`,
      },
    });

    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('message', (data) => {
      console.log('Received message:', data);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('Connected to the server');
  //   });

  //   socket.on('message', (message) => {
  //     const data = JSON.parse(message);
  //     console.log('Received message:', data);
  //   });

  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login />
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/flights"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/airplanes"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/seats"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/messages"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
