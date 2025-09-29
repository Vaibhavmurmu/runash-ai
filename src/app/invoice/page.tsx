"use client";

import React from "react";

const invoices = [
  {
    id: "INV-001",
    date: "2025-09-01",
    amount: "$30.00",
    status: "Paid",
    downloadUrl: "#",
  },
  {
    id: "INV-002",
    date: "2025-08-01",
    amount: "$30.00",
    status: "Paid",
    downloadUrl: "#",
  },
];

export default function InvoicePage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Invoices</h1>
      <p className="mb-4">View and download your past invoices.</p>
      <div className="bg-white rounded-lg shadow p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Invoice #</th>
              <th className="py-2">Date</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Status</th>
              <th className="py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t">
                <td className="py-2">{inv.id}</td>
                <td className="py-2">{inv.date}</td>
                <td className="py-2">{inv.amount}</td>
                <td className="py-2">{inv.status}</td>
                <td className="py-2">
                  <a
                    href={inv.downloadUrl}
                    className="text-blue-600 hover:underline"
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
