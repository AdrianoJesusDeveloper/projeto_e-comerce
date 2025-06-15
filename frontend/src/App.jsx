import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Produtos from './pages/Produtos';


function App() {
  // Carrinho removido pois não está sendo utilizado
  
  return (
    <AuthProvider>
      <Router>
        <Routes>          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
  path="/produtos"
  element={
    <PrivateRoute>
      <Produtos />
    </PrivateRoute>
  }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
