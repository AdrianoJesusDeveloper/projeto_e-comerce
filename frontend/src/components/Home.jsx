import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import Navbar from'./Navbar';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Aqui você pode buscar do backend Django
    fetch('http://localhost:8000/api/produtos/')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold p-6">Produtos em destaque</h1>
      <ProductList products={products} />
    </div>
  );
}
