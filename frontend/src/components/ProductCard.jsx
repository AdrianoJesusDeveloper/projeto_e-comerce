import React from 'react';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border rounded shadow p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-700 mt-2">R$ {product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
