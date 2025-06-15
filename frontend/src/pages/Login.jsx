// src/pages/Produtos.jsx
import React, { useEffect, useState } from 'react';

function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch('http://localhost:8000/api/produtos/', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access')}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProdutos(data);
      } else {
        alert('Erro ao carregar produtos');
      }
    }

    fetchProdutos();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Lista de Produtos</h1>

      {produtos.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum produto cadastrado.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-800">{produto.nome}</h2>
              <p className="text-gray-600 mt-2">{produto.descricao}</p>
              <p className="text-green-600 font-bold mt-4">R$ {Number(produto.preco).toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Produtos;
