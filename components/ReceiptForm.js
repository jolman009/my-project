'use client';

import React, { useState } from 'react';

const ReceiptForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    storeName: '',
    storeAddress: '',
    totalItems: '',
    totalAmount: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      storeName: '',
      storeAddress: '',
      totalItems: '',
      totalAmount: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="storeName" className="block text-sm font-medium text-gray-700">Store Name:</label>
        <input
          type="text"
          id="storeName"
          name="storeName"
          value={formData.storeName}
          onChange={handleInputChange}
          required
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label htmlFor="storeAddress" className="block text-sm font-medium text-gray-700">Store Address:</label>
        <input
          type="text"
          id="storeAddress"
          name="storeAddress"
          value={formData.storeAddress}
          onChange={handleInputChange}
          required
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label htmlFor="totalItems" className="block text-sm font-medium text-gray-700">Total Items:</label>
        <input
          type="number"
          id="totalItems"
          name="totalItems"
          value={formData.totalItems}
          onChange={handleInputChange}
          required
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <div>
        <label htmlFor="totalAmount" className="block text-sm font-medium text-gray-700">Total Amount:</label>
        <input
          type="number"
          id="totalAmount"
          name="totalAmount"
          value={formData.totalAmount}
          onChange={handleInputChange}
          step="0.01"
          required
          className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      
      <button 
        type="submit"
        className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Save Receipt
      </button>
    </form>
  );
};

export default ReceiptForm;