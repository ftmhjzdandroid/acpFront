import { useRef, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { InputIcon, Tag } from "../../molecules";
// eslint-disable-next-line import/no-extraneous-dependencies
import persian from "react-date-object/calendars/persian";
// eslint-disable-next-line import/no-extraneous-dependencies
import persian_fa from "react-date-object/locales/persian_fa";
import { TypeDatePicker } from "../date-picker";
import { Calendar } from "iconsax-react";
// eslint-disable-next-line import/no-extraneous-dependencies

interface IProps {
  dates?: TypeDatePicker[];
  isError?: boolean;
  onChange?: (date: TypeDatePicker[]) => void;
  onRemoveTag?: (date: TypeDatePicker) => void;
  placeholder?: string;
  pickerMode?: "multiple" | "fullDate" | "onlyYear" | "onlyMonth" | "onlyDay";
  className?: string;
  format?: string;
  plugins?: any;
}
export const PersianTimePicker = (props: IProps) => {
  const { dates, onRemoveTag = () => {}, isError, placeholder } = props;

  const [pickerValue, setPickerValue] = useState<
    TypeDatePicker | TypeDatePicker[] | null
  >();
  const [open, setOpen] = useState<boolean>(false);

  const datePickerRef = useRef<any>(null);

  const handleCloseDatePicker = () => {
    if (datePickerRef.current) datePickerRef.current.closeCalendar();
  };
  return (
    <>
      <span
        className={`absolute inset-0 bg-black bg-opacity-10 z-20 rounded-2xl transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseDatePicker}
      ></span>
      <DatePicker
        format="YYYY/MM/DD HH:mm"
        plugins={[<TimePicker position="bottom" hideSeconds />]}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
        onChange={(data) => setPickerValue(data)}
        containerClassName="w-full"
        ref={datePickerRef}
        onClose={() => {
          setOpen(false);
        }}
        numberOfMonths={1}
        value={pickerValue}
        render={(value: string, openCalendar: () => void) => {
          return (
            <InputIcon
              placeholder={placeholder}
              leftIcon={<Calendar />}
              readOnly={true}
              value={pickerValue?.toString()}
              className={`cursor-pointer ${props.className}`}
              isError={isError}
              onClick={() => {
                openCalendar();
                setOpen(true);
              }}
              onKeyDown={(key) => {
                if (key === "Tab") handleCloseDatePicker();
              }}
            />
          );
        }}
      />
      {dates && dates.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {dates.map((date, index) => {
            return (
              <Tag key={index} onRemove={() => onRemoveTag(date)}>
                {date.format
                  ? date.format("YYYY/MM/DD/ HH:mm")
                  : date.toString()}
              </Tag>
            );
          })}
        </div>
      )}
    </>
  );
};
