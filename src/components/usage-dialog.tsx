import React from "react";

interface UsageDialogProps {
  name: string;
  data?: {
    name: string;
    freeCredit: number;
    proUpgrade: number;
    description: string;
    usage?: string;
    proBenefits?: string;
  };
  onClose: () => void;
}

const UsageDialog: React.FC<UsageDialogProps> = ({ name, data, onClose }) => {
  if (!data) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2">{data.name} Usage</h2>
        <p className="mb-4 text-gray-600">{data.description}</p>
        {data.usage && (
          <div className="mb-2 text-sm text-gray-500">Usage: {data.usage}</div>
        )}
        <div className="mb-4">
          <div className="mb-2">
            <span className="font-semibold">Free Credit:</span> $
            {data.freeCredit}
          </div>
          <div>
            <span className="font-semibold">Upgrade to Pro:</span> $
            {data.proUpgrade}
          </div>
        </div>
        {data.proBenefits && (
          <div className="mb-4">
            <span className="font-semibold">Pro Benefits:</span>{" "}
            {data.proBenefits}
          </div>
        )}
      </div>
    </div>
  );
};

export default UsageDialog;
