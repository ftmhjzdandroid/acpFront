import { Box } from "../../../atoms";
import Skeleton from "../../../atoms/skeleton";
interface IProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  className?: string;
}

export const FaqSkeleton = (props: IProps) => {
  const { className } = props;
  return (
    <Box className="flex  flex-col gap-4 w-full mt-24">
      {Array.from(Array(4).keys()).map((item) => (
        <Skeleton
          className="flex justify-between items-center px-5 h-16 w-full"
          rounded="md"
          fill="gray"
          key={item}
        >
          <Skeleton
            fill="light"
            className="h-1.5 w-1/3 md:h-2 md:w-96 bg-gray-500"
            rounded="sm"
          />
          <Box className="flex items-center justify-between gap-6">
            {Array.from(Array(3).keys()).map((p) => (
              <Skeleton
                key={p}
                fill="light"
                className="h-1.5 w-1/3 md:h-6 md:w-6 bg-gray-500"
                rounded="sm"
              />
            ))}
          </Box>
        </Skeleton>
      ))}
    </Box>
  );
};
