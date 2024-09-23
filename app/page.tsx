'use client';

import React, { useState } from 'react';
import ReceiptForm from '../components/ReceiptForm';

export default function Home() {
  const [receipts, setReceipts] = useState([]);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [report, setReport] = useState('');

  const handleSubmit = (formData) => {
    setReceipts(prevReceipts => [...prevReceipts, formData]);
  };

  const generateReport = () => {
    if (receipts.length === 0) {
      alert('No receipts to generate report from.');
      return;
    }
    
    let reportText = 'Expense Report\n\n';
    let total = 0;
    
    receipts.forEach((receipt, index) => {
      reportText += `Receipt ${index + 1}:\n`;
      reportText += `Store: ${receipt.storeName}\n`;
      reportText += `Address: ${receipt.storeAddress}\n`;
      reportText += `Items: ${receipt.totalItems}\n`;
      reportText += `Amount: $${receipt.totalAmount}\n\n`;
      total += parseFloat(receipt.totalAmount);
    });
    
    reportText += `Total Expenses: $${total.toFixed(2)}`;
    
    setReport(reportText);
    setIsReportModalOpen(true);
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-gray-100 to-gray-200 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="px-4 py-5 sm:p-6">
          <h1 className="mb-6 text-3xl font-extrabold text-gray-900">Receipt Scanner App</h1>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Input Receipt</h2>
            <div className="p-4 mb-4 transition duration-300 ease-in-out rounded-md bg-gray-50 hover:shadow-md">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Scan Receipt</h3>
              <input type="file" accept="image/*" className="mb-2" />
              <button 
                onClick={() => alert('Scanning not implemented yet')}
                className="px-4 py-2 text-white transition duration-300 ease-in-out transform bg-blue-500 rounded-md hover:bg-blue-600 hover:-translate-y-1"
              >
                Scan Receipt
              </button>
            </div>
            <div className="p-4 transition duration-300 ease-in-out rounded-md bg-gray-50 hover:shadow-md">
              <h3 className="mb-2 text-lg font-medium text-gray-900">Manual Input</h3>
              <ReceiptForm onSubmit={handleSubmit} />
            </div>
          </section>

          <section className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Saved Receipts</h2>
            {receipts.length > 0 ? (
              <ul className="space-y-2">
                {receipts.map((receipt, index) => (
                  <li key={index} className="p-3 transition duration-300 ease-in-out rounded-md bg-gray-50 hover:shadow-md">
                    Receipt {index + 1}: {receipt.storeName} - ${receipt.totalAmount}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="italic text-gray-500">No receipts saved yet.</p>
            )}
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Generate Report</h2>
            <button 
              onClick={generateReport}
              className="px-6 py-3 text-white transition duration-300 ease-in-out transform bg-green-500 rounded-md hover:bg-green-600 hover:-translate-y-1"
            >
              Generate Expense Report
            </button>
          </section>
        </div>
      </div>

      {isReportModalOpen && (
        <div className="fixed inset-0 w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50" onClick={() => setIsReportModalOpen(false)}>
          <div className="relative p-5 mx-auto bg-white border rounded-md shadow-lg top-20 w-96" onClick={e => e.stopPropagation()}>
            <div className="mt-3 text-center">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Expense Report</h3>
              <div className="py-3 mt-2 px-7">
                <p className="text-sm text-gray-500 whitespace-pre-line">{report}</p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  onClick={() => setIsReportModalOpen(false)}
                  className="w-full px-4 py-2 text-base font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}