"use client";
import React, { useState } from 'react';
import UsageDialog from '../../components/usage-dialog';

const usageData = [
  {
    name: 'Agent',
    freeCredit: 5,
    proUpgrade: 30,
    description: 'AI agent for automation and assistance.',
    usage: '10 actions/month',
    proBenefits: 'Unlimited actions, priority support',
  },
  {
    name: 'Video Generator',
    freeCredit: 5,
    proUpgrade: 30,
    description: 'Generate videos using AI models.',
    usage: '5 videos/month',
    proBenefits: 'Unlimited videos, 4K export',
  },
  {
    name: 'Image Generator',
    freeCredit: 5,
    proUpgrade: 30,
    description: 'Create images with generative AI.',
    usage: '20 images/month',
    proBenefits: 'Unlimited images, HD quality',
  }
];

export default function UsagePage() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);
  const [upgradeDialog, setUpgradeDialog] = useState<string | null>(null);

  const handleUpgrade = (name: string) => {
    setUpgradeDialog(name);
  };

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Usage & Credits</h1>
      <div className="space-y-6">
        {usageData.map((item) => (
          <div key={item.name} className="border rounded-lg p-6 shadow-sm flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-xs text-gray-400">Usage: {item.usage}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => setOpenDialog(item.name)}
                >
                  View Details
                </button>
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={() => handleUpgrade(item.name)}
                >
                  Upgrade to Pro
                </button>
              </div>
            </div>
            <div className="flex gap-4 mt-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded">Free Credit: ${item.freeCredit}</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">Upgrade Pro: ${item.proUpgrade}</span>
            </div>
          </div>
        ))}
      </div>
      {openDialog && (
        <UsageDialog
          name={openDialog}
          data={usageData.find((d) => d.name === openDialog)}
          onClose={() => setOpenDialog(null)}
        />
      )}
      {upgradeDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setUpgradeDialog(null)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2">Upgrade to Pro</h2>
            <p className="mb-4 text-gray-600">
              Upgrade <span className="font-semibold">{upgradeDialog}</span> for ${usageData.find((d) => d.name === upgradeDialog)?.proUpgrade} and get:
            </p>
            <ul className="mb-4 list-disc pl-5 text-gray-700">
              <li>{usageData.find((d) => d.name === upgradeDialog)?.proBenefits}</li>
            </ul>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mb-2"
              onClick={() => {
                alert('Upgrade successful!');
                setUpgradeDialog(null);
              }}
            >
              Confirm Upgrade
            </button>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded w-full"
              onClick={() => setUpgradeDialog(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
