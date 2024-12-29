'use client';

import { ReactNode } from 'react';

interface ModalProps {
  title: string;
  description: string;
  onCancel: () => void;
  onConfirm: () => void;
  confirmText?: string;
  isConfirmDisabled?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  onCancel,
  onConfirm,
  confirmText = 'Confirm',
  isConfirmDisabled = false,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="text-sm text-gray-600 mb-6">{description}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-200 rounded text-sm"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isConfirmDisabled}
            className={`px-4 py-2 bg-red-600 text-white rounded text-sm ${
              isConfirmDisabled ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

