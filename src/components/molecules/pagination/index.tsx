import { ArrowSquareLeft, ArrowSquareRight } from "iconsax-react";

interface IProps {
  disablePrevBtn?: boolean;
  disableNextBtn?: boolean;
  disableInput?: boolean;
  onClickPrevBtn?: () => void;
  onClickNextBtn?: () => void;
  onChange: (text: string) => void;
  value?: string;
  maxValue?: number;
  inputValueReadOnly?: boolean;
}

function Pagination(props: IProps) {
  const {
    disablePrevBtn,
    disableNextBtn,
    onClickPrevBtn = () => { },
    onClickNextBtn = () => { },
    onChange = () => { },
    disableInput,
    value,
    maxValue = 99,
    inputValueReadOnly = false
  } = props;

  return (
    <div className="my-6 gap-2 flex justify-center">
      <button
        disabled={disablePrevBtn}
        onClick={onClickPrevBtn}
        className="disabled:opacity-25 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded duration-300 transition-all"
      >
        <ArrowSquareRight />
      </button>
      <input
        disabled={disableInput}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        maxLength={2}
        min={1}
        max={maxValue}
        readOnly={inputValueReadOnly}
        type="number"
        className="text-center w-[40px] border-br focus:border-primary th-bg-color font-semibold md:text-sm  border rounded outline-none duration-300 text-xs transition-all"
      />
      <button
        disabled={disableNextBtn}
        onClick={onClickNextBtn}
        className="disabled:opacity-25 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded duration-300 transition-all"
      >
        <ArrowSquareLeft />
      </button>
    </div>
  );
}

export default Pagination;
