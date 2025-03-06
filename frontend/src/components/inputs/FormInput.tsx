import clsx from "clsx";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormInput = ({ label, error, ...props }: Props) => {
  const inputClassName = clsx(
    "bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
    error && "border-red-500",
    !error && "border-gray-300",
  );
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-900">
        {label}
      </label>

      <input className={inputClassName} {...props} />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
