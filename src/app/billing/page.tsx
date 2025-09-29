"use client";

import React from "react";

export default function BillingPage() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Billing</h1>
      <p className="mb-4">
        Manage your billing information, payment methods, and view your current
        plan.
      </p>
      {/* Add billing form or details here */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Current Plan</h2>
        <p className="mb-2">
          You are currently on the <span className="font-bold">Free</span> plan.
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Upgrade Plan
        </button>
      </div>
    </div>
  );
}
