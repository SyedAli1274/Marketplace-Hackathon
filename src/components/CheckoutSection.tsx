'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { client } from '@/sanity/lib/client';

export default function CheckoutSection() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    zipCode: '',
    billingMethod: 'cashOnDelivery',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    walletNumber: '',
    walletGateway: 'jazzcash', // Default to JazzCash
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const totalBill = calculateTotal();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePaymentDetails()) {
      setErrorMessage('Please fill in the required payment details.');
      return;
    }

    try {
      // Create or update customer
      const customer = await client.createOrReplace({
        _type: 'customers',
        _id: formData.fullName, // Use email as the document ID
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        country: formData.country,
        zipCode: formData.zipCode,
      });
      console.log('Customer Data:', customer);
      
      // Create order 
      const order = await client.create({
        _type: 'orders',
        customerName: formData.fullName, // Save fullName of customer as customerName
        orderDate: new Date().toISOString(),
        billingMethod: formData.billingMethod,
        totalAmount: totalBill,
        items: cartItems.map(item => ({
          name: item.title,
          quantity: item.quantity,
          price: item.price,
        })),
      });

      //temprory solution to solve build error, change it later
      console.log('Order placed:', order);


      setIsOrderPlaced(true);
      clearCart(); // Clear the cart after placing the order
    } catch (error) {
      console.error('Error placing order:', error);
      setErrorMessage('Failed to place order. Please try again.');
    }
  };

  const validatePaymentDetails = () => {
    if (formData.billingMethod === 'card') {
      return formData.cardNumber && formData.cardExpiry && formData.cardCVV;
    } else if (formData.billingMethod === 'mobileWallet') {
      return formData.walletNumber && formData.walletGateway;
    }
    return true; // cashOnDelivery requires no additional validation
  };

  return (
    <div className="py-8 px-4 sm:px-12 lg:px-28 w-full sm:w-[90%] lg:w-[80%] mx-auto shadow-xl bg-gray-100">
      <h1 className="text-3xl font-bold text-[#272343] mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Personal and Address Information */}
          <div>
            <label className="block text-lg font-medium text-[#272343]">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#272343]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#272343]">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#272343]">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#272343]">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#272343]">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#272343]">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              className="w-full p-3 border-2 rounded-md focus:outline-none focus:border-teal-500"
            />
          </div>
        </div>

        {/* Billing and Payment Information */}
        <div className="space-y-4">
          <label className="block text-lg font-medium text-[#272343]">Payment Method</label>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="billingMethod"
                value="cashOnDelivery"
                checked={formData.billingMethod === 'cashOnDelivery'}
                onChange={handleChange}
              />
              <span className="ml-2">Cash on Delivery</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="billingMethod"
                value="card"
                onChange={handleChange}
              />
              <span className="ml-2">Debit/Credit Card</span>
            </label>
            {formData.billingMethod === 'card' && (
              <div className="space-y-2">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border-2 border-teal-500 rounded-md"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="cardExpiry"
                    placeholder="MM/YY"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border-2 border-teal-500 rounded-md"
                  />
                  <input
                    type="text"
                    name="cardCVV"
                    placeholder="CVV"
                    value={formData.cardCVV}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border-2 border-teal-500 rounded-md"
                  />
                </div>
              </div>
            )}
            <label className="flex items-center">
              <input
                type="radio"
                name="billingMethod"
                value="mobileWallet"
                onChange={handleChange}
              />
              <span className="ml-2">Mobile Wallet (JazzCash, EasyPaisa)</span>
            </label>
            {formData.billingMethod === 'mobileWallet' && (
              <div className="space-y-2">
                <select
                  name="walletGateway"
                  value={formData.walletGateway}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-md"
                >
                  <option value="jazzcash">JazzCash</option>
                  <option value="easypaisa">EasyPaisa</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="walletNumber"
                  placeholder="Mobile Wallet Number"
                  value={formData.walletNumber}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border-2 rounded-md focus:outline-none focus:border-teal-500"
                />
              </div>
            )}
          </div>
        </div>

        <div className="text-xl font-bold text-[#272343] mt-6">
          Total: ${totalBill} USD
        </div>

        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <button
          type="submit"
          className="w-full bg-[#029FAE] text-white text-lg py-3 rounded-md hover:bg-teal-600"
        >
          Confirm Order
        </button>
      </form>

      {isOrderPlaced && (
        <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          Your order has been successfully placed!
        </div>
      )}
    </div>
  );
}
