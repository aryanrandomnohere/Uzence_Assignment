import React from 'react';

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled,
  invalid,
  loading,
  variant = 'outlined',
  size = 'md',
}) => {
  const baseClasses = 'border rounded-md w-full focus:outline-none';

  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const variantClasses = {
    filled: 'bg-gray-100 border-gray-100 focus:bg-white focus:border-blue-500',
    outlined: 'bg-white border-gray-300 focus:border-blue-500',
    ghost: 'bg-transparent border-transparent focus:bg-gray-100',
  };

  const disabledClasses = 'disabled:bg-gray-200 disabled:cursor-not-allowed';
  const invalidClasses = 'border-red-500 text-red-500 focus:border-red-500';

  const classes = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    disabled || loading ? disabledClasses : '',
    invalid ? invalidClasses : '',
  ]
    .join(' ')
    .trim();

  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={classes}
        />
        {loading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="animate-spin h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
      {helperText && !errorMessage && <p className="mt-1 text-xs text-gray-500">{helperText}</p>}
      {errorMessage && <p className="mt-1 text-xs text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default InputField;