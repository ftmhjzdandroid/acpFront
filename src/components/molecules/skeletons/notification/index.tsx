import { Box, Card } from "../../../atoms";
import Skeleton from "../../../atoms/skeleton";
interface IProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  className?: string;
}

export const NotificationSkeleton = (props: IProps) => {
  const { className } = props;
  return (
    <div className="flex gap-4 flex-col w-full">
      {Array.from(Array(4).keys()).map((item) => (
        <Skeleton
          className="flex w-full justify-between py-8 px-5 h-24"
          rounded="md"
          fill="gray"
          key={item}
        >
          <Box>
            <Skeleton
              fill="light"
              className="h-1.5 w-1/3 md:h-2 md:w-32 bg-gray-500"
              rounded="sm"
            />
            <Skeleton
              fill="light"
              className="h-1.5 my-2   w-1/3 md:h-2 md:w-32 bg-gray-500"
              rounded="sm"
            />
            <Skeleton
              fill="light"
              className="h-1.5 my-2  w-1/3 md:h-2 md:w-32 bg-gray-500"
              rounded="sm"
            />
          </Box>
         
          <Skeleton
            fill="light"
            className="h-1.5 my-2  w-1/3 md:h-2 md:w-32 bg-gray-500"
            rounded="sm"
          />
        </Skeleton>
      ))}
    </div>
  );
};
