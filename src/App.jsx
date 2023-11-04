import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import './App.css';
import Login from "./components/login/Login";
import { ProtectedRoute } from "./components/utils/ProtectedRoute";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    const socket = new WebSocket(`ws://127.0.0.1:3300?token=Bearer%20${jwtToken}`); // Replace with your actual backend WebSocket URL

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
    };

    socket.onclose = (event) => {
      console.log('Socket closed:', event);
    };

    socket.onerror = (error) => {
      console.error('Socket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);


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
