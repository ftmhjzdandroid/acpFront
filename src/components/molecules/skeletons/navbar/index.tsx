import { Card } from "../../../atoms";
import Skeleton from "../../../atoms/skeleton";
interface IProps {
    /**
     * What background color to use
     */
    backgroundColor?: string;
    className?: string;
}

export const SkeletonNavbar = (props: IProps) => {
    const { className } = props;
    return (
        <div className={`space-y-4 ${className}`}>
            <Card className="flex justify-between items-center px-2 md:px-8 py-3" padding="p-2">
                <div className="w-full flex justify-between items-center gap-4">
                    <div className="flex gap-2 items-center md:w-full">
                        <Skeleton className="w-12 h-12" fill="gray"></Skeleton>
                        <Skeleton className="hidden md:flex flex-col justify-center items-center py-2 px-4 h-12 w-32 gap-3" rounded="sm">
                            <Skeleton className="h-6 w-full" fill="gray" rounded="sm"></Skeleton>
                            <Skeleton className="h-6 w-full" fill="gray" rounded="sm"></Skeleton>
                        </Skeleton>
                    </div>
                    <div className="hidden lg:flex items-center justify-end gap-2 w-full">
                        <div className="gap-2 flex justify-center items-center border-l-[1px] border-solid border-gray-400 w-40">
                            <Skeleton className="h-8 w-8" rounded="sm"></Skeleton>
                            <Skeleton className="h-8 w-8" rounded="sm"></Skeleton>
                            <Skeleton className="h-8 w-16" fill="gray" rounded="sm"></Skeleton>
                        </div>
                        <div className="hidden lg:flex items-center justify-end gap-2 w-56">
                            <Skeleton className="h-12 w-12" fill="gray" rounded="full"></Skeleton>
                            <Skeleton className="hidden md:flex flex-col justify-center items-center py-2 px-4 h-12 w-44 gap-3" rounded="sm">
                                <Skeleton className="h-6 w-full" fill="gray" rounded="sm"></Skeleton>
                                <Skeleton className="h-6 w-full" fill="gray" rounded="sm"></Skeleton>
                            </Skeleton>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};
