import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
export function Input({
  label,
  className = '',
  ...props
}: InputProps) {
  return <div className="w-full">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>}
      <input className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E91E63] focus:border-transparent transition-all bg-gray-50 ${className}`} {...props} />
    </div>;
}