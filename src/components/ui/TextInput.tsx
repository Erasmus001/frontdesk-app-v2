import { ChangeEvent, FC } from "react";

type TextInputProp = {
  label: string;
  placeholder: string;
  type: React.HTMLInputTypeAttribute;
  id?: string;
  value?: string;
  isRequired?: boolean;
  onChangeHandler: (event: ChangeEvent) => void;
};

const TextInput: FC<TextInputProp> = ({
  label,
  placeholder,
  type,
  id,
  value,
  isRequired,
  onChangeHandler,
}): JSX.Element => {
  return (
    <div className="w-full flex items-start justify-start flex-col gap-2">
      <label htmlFor={id} className="text-base font-semibold">
        {label}
      </label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChangeHandler}
        className="w-full py-2 px-3 border border-gray-300 rounded-md text-base focus:outline-[#3D79F3] placeholder:text-sm"
      />
    </div>
  );
};

export default TextInput;
