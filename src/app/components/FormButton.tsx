import React from 'react';

interface FormButtonProps {
  isSubmitting: boolean;
}

const FormButton: React.FC<FormButtonProps> = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      className="text-primary bg-accent focus:ring-accent focus:ring-3 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      disabled={isSubmitting}
    >
      {isSubmitting ? "Loading..." : "Submit"}
    </button>
  );
};

export default FormButton;
