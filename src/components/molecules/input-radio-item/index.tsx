export interface IRadioInputconst {
  id: number;
  name: string;
  label: string;
  value: boolean;
  icon?: JSX.Element;
}

interface IProps {
  data: IRadioInputconst;
  onCahnge?: (value: boolean) => void;
  key?: React.Key | null | undefined;
  checked: boolean;
}
const InputRadioItem = (props: IProps) => {
  const { data, onCahnge = () => {}, key, checked } = props;
  return (
    <div
      className="cursor-pointer"
      onClick={() => onCahnge(data.value)}
      key={key}
    >
      <div className="flex justify-between p-2 rounded hover:bg-gray-100">
        <div className="flex">
          <div className="flex items-center h-5">
            <input
              id={data.name}
              type="radio"
              className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              checked={checked}
              onChange={() => onCahnge(data.value)}
            />
          </div>
          <label
            htmlFor={data.name}
            className="mr-2 cursor-pointer font-medium th-text-color"
          >
            {data.label}
          </label>
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default InputRadioItem;
