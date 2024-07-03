import React from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <section
      className="pointer-events-none fixed top-28 inset-x-0 mx-auto flex justify-center items-center max-w-fit p-2.5 text-accent bg-primary rounded-lg z-50"
    >
      <div className="mr-2 text-sm font-bold">{message}</div>
    </section>
  );
};

export default Toast;
