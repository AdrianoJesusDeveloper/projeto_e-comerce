import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Minha Loja</div>
      <ul className="flex space-x-6">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/produtos" className="hover:text-gray-300">Produtos</a></li>
        <li><a href="/carrinho" className="hover:text-gray-300">Carrinho</a></li>
      </ul>
    </nav>
  );
}
