"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { client } from '@/sanity/lib/client';

interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
  description: string;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  successMessage: string;
  clearSuccessMessage: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [successMessage, setSuccessMessage] = useState<string>('');

  const fetchProduct = async (id: string): Promise<Product | null> => {
    const query = `*[_type == "products" && _id == $id][0]{
      _id,
      title,
      price,
      "imageUrl": image.asset->url,
      description
    }`;
    try {
      const result = await client.fetch(query, { id });
      return result ? { ...result, id: result._id, quantity: 1 } : null;
    } catch (error) {
      console.error("Error fetching product:", error);
      return null;
    }
  };

  const addToCart = async (id: string, quantity: number) => {
    const product = await fetchProduct(id);
    if (product) {
      setCartItems((prevItems) => {
        const existingItem = prevItems.find((cartItem) => cartItem.id === id);
        if (existingItem) {
          return prevItems.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          );
        }
        return [...prevItems, { ...product, quantity }];
      });
      setSuccessMessage(`You have successfully added ${product.title} to your cart`);
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const clearSuccessMessage = () => {
    setSuccessMessage('');
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartQuantity, clearCart, successMessage, clearSuccessMessage }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};