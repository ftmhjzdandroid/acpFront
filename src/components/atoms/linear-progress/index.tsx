import "./index.css";

type IProps = {
  className?: string;
};

export const LinearProgress = (props:IProps) => {
  return (
  <div className={`relative w-full bg-gray-200 rounded`+props.className}>
    <div style={{width: "100%"}} className="h-1 rounded shim-blue"></div>
  </div>
  );
};
