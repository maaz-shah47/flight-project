import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/flights" element={<Dashboard />} />
        <Route path="/dashboard/seats" element={<Dashboard />} />
        <Route path="/dashboard/messages" element={<Dashboard />} />
        <Route path="/dashboard/settings" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
