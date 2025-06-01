import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Segments from './pages/Segments';
import Campaigns from './pages/Campaigns';
import AIGenerator from './pages/AIGenerator';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/segments" element={<Segments />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/ai-generator" element={<AIGenerator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
