interface IProps {
  size?: number;
  isPin?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const Pin = (props: IProps) => {
  const { size, isPin, onClick = () => {} } = props;
  const sizeValue = size ? String(size) : "24";
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onClick(e)}
    >
      <svg
        // className="cursor-pointer"
        className={`block transform duration-300 cursor-pointer ${
          isPin ? "rotate-[-45deg]" : "rotate-0"
        }`}
        width={sizeValue}
        height={sizeValue}
        //   viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_4978_85445"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width={sizeValue}
          height={sizeValue}
        >
          <rect
            width={sizeValue}
            height={sizeValue}
            fill={`${isPin ? "#3b82f6" : "#D9D9D9"}`}
          />
        </mask>
        <g>
          <path
            d="M21.6667 8.0685L15.9048 2.29551C15.7143 2.10467 15.381 1.96154 15.0952 2.00925C14.8095 2.05696 14.5238 2.20009 14.381 2.43864L10.1905 8.59331L5.7619 9.59524C5.42857 9.69066 5.14286 9.92921 5 10.3109C4.90476 10.6449 5 11.0266 5.2381 11.3128L8.23809 14.3186L2.28571 20.2824C1.90476 20.6641 1.90476 21.2843 2.28571 21.7137C2.47619 21.9046 2.71429 22 3 22C3.28571 22 3.52381 21.9046 3.71429 21.7137L9.71429 15.7022L12.7143 18.708C12.9048 18.8988 13.1429 18.9942 13.4286 18.9942C13.5238 18.9942 13.619 18.9942 13.7143 18.9465C14.0476 18.8511 14.3333 18.5648 14.4286 18.1832L15.4286 13.7461L21.5714 9.59524C21.8095 9.40439 21.9524 9.16584 22 8.87958C21.9524 8.5456 21.9048 8.25934 21.6667 8.0685ZM14 12.3625C13.8095 12.5056 13.6667 12.7441 13.5714 12.9827L12.8571 16.0362L7.95238 11.122L11 10.454C11.2381 10.4063 11.4762 10.2632 11.619 10.0246L15.3333 4.58562L19.381 8.64102L14 12.3625Z"
            fill={`${isPin ? "#3b82f6" : "#A4A4A4"}`}
          />
        </g>
      </svg>
    </div>
  );
};

export default Pin;
