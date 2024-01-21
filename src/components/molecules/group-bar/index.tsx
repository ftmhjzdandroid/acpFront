import { useState, ReactNode } from "react";
import { IReceiversGroupList } from "../../../pages/notifications/create-notification/receivers";
import { Box, Typography } from "../../atoms";
import { Badge } from "../../atoms/badge";
import { useAppSelector } from "../../../services/hooks";
import { TickSquare } from "iconsax-react";
import { MobileGroupTab } from "./mobile-component";
import { notificationState } from "../../../services/slice/notification-stepper";
import { countOfSelectedItem } from "../../../pages/notifications/create-notification/utils/selection-handler";

interface IProps {
  /**
   * لیست داده های گروهی که در سمت راست رندر می شوند
   */
  receiversGroupTabDataList: IReceiversGroupList[];
  /**
   * لیست داده های فردی که در سمت چپ رندر می شوند
   */
  receiversSingleTabDataList?: IReceiversGroupList[];
  /**
   *  اطلاعات مربوط به زیرشاخه
   */
  children?: ReactNode;
}

const GroupBar = (props: IProps) => {
  const { receiversGroupTabDataList, receiversSingleTabDataList, children } =
    props;

  /**
   *  تعریف استیت مربوط به داده های گروهی و تکی و مقدار دهی اولیه با داده های دریافتی از ورودی کامپوننت
   */
  const [receiversGroupTabList, setReceiversGroupTabList] = useState<
    IReceiversGroupList[]
  >(receiversGroupTabDataList);
  const [receiversSingleTabList, setReceiversSingleTabList] = useState<
    IReceiversGroupList[]
  >(receiversSingleTabDataList ?? []);
  //*******************************************************************************************************************************************
  const [popoverStatus, setPopoverStatus] = useState<{
    type: "group" | "single";
    isShow: boolean;
  }>({ type: "single", isShow: false });
  /**
   *  تغییر وضعیت تب بار با کلیک بر روی هر یک از آیتم های آن
   */
  const receiversDataListHandle = (data: {
    index: number;
    type: "group" | "single";
  }) => {
    const changeTabState = (dataList: IReceiversGroupList[]) => {
      // در این بخش آیتم ها را از حالت اکتیو خارج می کند
      const newData = dataList.map((obj) => {
        return { ...obj, isActive: false };
      });
      /**
       *  فقط آیتم کلیک شده را اکتیو می کند
       */
      const items = [...newData];
      const item = { ...items[data.index] };
      item.isActive = true;
      items[data.index] = item;
      return items;
    };
    // استیت ها را آپدیت می کند
    if (data.type === "group") {
      setReceiversGroupTabList((prevState) => changeTabState(prevState));
      setReceiversSingleTabList((prevState) =>
        prevState.map((obj) => {
          return { ...obj, isActive: false };
        })
      );
    } else {
      setReceiversSingleTabList((prevState) => changeTabState(prevState));
      setReceiversGroupTabList((prevState) =>
        prevState.map((obj) => {
          return { ...obj, isActive: false };
        })
      );
    }
  };
  //*******************************************************************************************************************************************
  /**
   *  نمایش آیتم های تب بار
   */
  const { newNotice } = useAppSelector(notificationState);

  const { targets } = newNotice;

  const receiversGroupCounterHandle = (id: number) => {
    switch (id) {
      case 1:
        return countOfSelectedItem(targets.partnerTypes);
      case 2:
        return countOfSelectedItem(targets.cpartyTypes);
      case 3:
        return countOfSelectedItem(targets.licenseTypes);
      case 4:
        return countOfSelectedItem(targets.geoIds);
      case 5:
        return countOfSelectedItem(targets.partners);
      case 6:
        return countOfSelectedItem(targets.cparties);
      default:
        return 0;
    }
  };
  const receiversDataListRender = (
    dataList: IReceiversGroupList[],
    dataType: "group" | "single"
  ) => {
    return (
      <Box className="flex gap-8">
        {dataList.map((data, index) => (
          <Typography
            type="h4"
            key={data.id}
            className={`flex items-center gap-2 font-semibold p-3 ${data.isActive
              ? "text-orange-500"
              : "text-gray-500"
              } hover:text-orange-500 transition-all duration-300 cursor-pointer relative`}
            onClick={() => receiversDataListHandle({ index, type: dataType })}
          >
            {data.title}
            {data.isActive && <span className="absolute bottom-0 right-0.5 h-1 bg-orange-500 rounded-t-lg w-full"></span>}
            {receiversGroupCounterHandle(data.id) > 0 && (
              <Badge className="flex items-center justify-center content-center bg-orange-500 px-2 py-0.5 rounded-full">
                <Typography type="h4" className="text-white font-semibold">
                  {receiversGroupCounterHandle(data.id)}
                </Typography>
              </Badge>
            )}
          </Typography>
        ))}
      </Box>
    );
  };
  //*******************************************************************************************************************************************
  /**
   *  تعیین تب فعال برای نمایش محتوای آن تب در درختواره پایین تب بار
   */

  const activTabDataRender = (): {
    activeTabData: IReceiversGroupList[];
    activeTabName: "group" | "single";
  } => {
    const receiversGroupActivTabFilter = receiversGroupTabList.filter(
      (item) => item.isActive
    );
    const receiversSingleActivTabFilter = receiversSingleTabList.filter(
      (item) => item.isActive
    );
    if (receiversGroupActivTabFilter.length > 0)
      return {
        activeTabData: receiversGroupActivTabFilter,
        activeTabName: "group",
      };
    else
      return {
        activeTabData: receiversSingleActivTabFilter,
        activeTabName: "single",
      };
  };
  //*******************************************************************************************************************************************
  const handlePopoverRender = (type: "group" | "single") => {
    const dataList =
      type === "group" ? receiversGroupTabList : receiversSingleTabList;
    return (
      <Box
        className={`bg-gray-50 px-3 border-t-gray-50 rounded-b-lg ${type === "group" ? "right-0" : "left-0"
          } top-[30px] min-w-[127px] absolute z-10`}
      >
        {dataList.map((data, index) => (
          <Box
            key={index}
            className="flex items-center gap-4 py-3 border-b last:border-b-0"
            onClick={() => {
              receiversDataListHandle({ index, type });
              setPopoverStatus({ type: popoverStatus.type, isShow: false });
            }}
          >
            <Box className="flex items-center gap-1">
              {receiversGroupCounterHandle(data.id) > 0 && (
                <TickSquare
                  size={16}
                  variant="Bold"
                  className="text-blue-300"
                />
              )}
              <Typography
                type="h4"
                className={`${data.isActive ? "text-blue-800" : "text-gray-500"
                  }  font-medium`}
              >
                {data.title}
              </Typography>
            </Box>
            {receiversGroupCounterHandle(data.id) > 0 && (
              <Badge className=" flex items-center justify-center content-center bg-blue-200 p-1 w-5 h-5 rounded-full">
                <Typography className="text-blue-900">
                  {receiversGroupCounterHandle(data.id)}
                </Typography>
              </Badge>
            )}
          </Box>
        ))}
      </Box>
    );
  };
  //*******************************************************************************************************************************************
  return (
    <>
      {/* {در حالت وب} */}
      <Box className="hidden md:block">
        {/* رندر تب بار */}
        <Box className="flex justify-between mt-6 border-b">
          {receiversDataListRender(receiversGroupTabList, "group")}
          {receiversDataListRender(receiversSingleTabList, "single")}
        </Box>
      </Box>
      {/* {در حالت موبایل} */}
      <MobileGroupTab
        dataType={popoverStatus.type}
        tabGroupList={[
          {
            title: "گروهی",
            isActive: popoverStatus.type === "group",
            onClick: () =>
              setPopoverStatus({
                type: "group",
                isShow: !popoverStatus.isShow,
              }),
          },
          {
            title: "انفرادی",
            isActive: popoverStatus.type === "single",
            onClick: () =>
              setPopoverStatus({
                type: "single",
                isShow: !popoverStatus.isShow,
              }),
          },
        ]}
        handlePopoverRender={
          popoverStatus.isShow ? handlePopoverRender : () => <></>
        }
      />
      {children}
      {/* رندر لیست محتوای تب بار */}
      {activTabDataRender().activeTabData.map((data) => data.dataList)}
    </>
  );
};

export default GroupBar;
