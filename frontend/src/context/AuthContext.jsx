// src/context/AuthContext.jsx
import React, { useState, useEffect, createContext } from 'react';

// ✅ Corrigido: declarando o contexto antes de usar
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  async function login(username, password) {
    try {
      const response = await fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);
        localStorage.setItem('user', JSON.stringify({ username }));
        setUser({ username });
      } else {
        alert('Login falhou: usuário ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro na requisição de login:', error);
      alert('Erro de conexão com o servidor');
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
