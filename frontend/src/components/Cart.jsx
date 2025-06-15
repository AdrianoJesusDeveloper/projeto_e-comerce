import React from 'react';

function Cart({ cartItems, onRemove }) {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-4'>Seu Carrinho</h2>
            {cartItems.length === 0 ? (
                <p>O carrinho está vazio.</p>
            ) : (
                <div className='space-y-4'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='flex items-center justify-between border-b pb-2'>
                            <div>
                                <h3 className='font-semibold'>{item.name}</h3>
                                <p>Quantidade: {item.quantity}</p>
                                <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
                            </div>
                            <button
                                onClick={() => onRemove(item.id)}
                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                            >
                                Remover
                            </button>
                        </div>
                    ))}
                    <div className='font-bold text-right text-xl'>
                        Total: R$ {totalPrice.toFixed(2)}
                    </div>
                    <button className='mt-4 w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition'>
                        Finalizar compra
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;