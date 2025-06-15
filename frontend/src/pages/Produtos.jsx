// src/pages/Produtos.jsx
import React, { useEffect, useState } from 'react';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch('http://localhost:8000/api/produtos/', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access')}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProdutos(data);
        } else {
          console.error('Erro ao buscar produtos:', response.status);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Produtos</h1>
      <ul className="space-y-2">
        {produtos.map((produto) => (
          <li key={produto.id} className="border p-4 rounded bg-gray-100">
            <h2 className="font-semibold">{produto.nome}</h2>
            <p>Preço: R$ {produto.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Produtos;
