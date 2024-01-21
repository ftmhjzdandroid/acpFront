type ProgressEdgeProps = {
  mode: "active" | "deActive";
  stepperMode: "horizontal" | "vertical" | undefined;
  color?: string;
  lastChild?: boolean;
  completed?: boolean;
  isActive?: boolean;
};

export const ProgressEdge = ({
  mode,
  stepperMode,
  color = "blue",
  lastChild,
  completed,
  isActive,
}: ProgressEdgeProps) => {
  const progressEdge = (mode: "active" | "deActive") => {
    if (mode === "active") {
      return (
        <div
          className={`flex px-2 mb-[20px] flex-col ${stepperMode === "vertical"
            ? " mr-5"
            : lastChild
              ? "hidden"
              : "justify-center w-8 md:w-14"
            }`}
        >
          <div
            className={`${stepperMode === "vertical"
              ? `w-[2px] ${completed ? "h-10" : "h-full"} bg-emerald-500`
              : `border-b-2   ${isActive ? "border-[#FFFFFF]" : `border-emerald-500`
              }`
              } rounded-lg`}
          ></div>
        </div>
      );
    } else {
      return (
        <div
          className={`flex px-2 flex-col last:hidden mb-[20px]  ${stepperMode === "vertical" ? " mr-5" : "justify-center w-8 md:w-14"
            }`}
        >
          <div
            className={`${stepperMode === "vertical"
              ? "h-10 bg-gray-300  w-[2px]"
              : "border-b-2  border-[#FFFFFF]"
              }`}
          ></div>
        </div>
      );
    }
  };

  return <>{progressEdge(mode)}</>;
};
