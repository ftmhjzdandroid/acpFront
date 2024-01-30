import { useRef, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { InputAnimatedPlaceHolder } from "../../molecules";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Add, Calendar } from "iconsax-react";
import { Box, Input } from "../../atoms";
export type TypeDatePicker = DateObject;
export class DatePickerClass extends DateObject {}
interface IProps {
  dates?: TypeDatePicker | TypeDatePicker[];
  isError?: boolean;
  onChange?: (date: TypeDatePicker) => void;
  placeholder?: string;
  pickerMode?: "multiple" | "fullDate" | "onlyYear" | "onlyMonth" | "onlyDay";
  className?: string;
  format?: string;
  plugins?: any;
  monthFormat?: string;
  maxDate?: string | number | Date | DateObject | undefined;
  minDate?: string | number | Date | DateObject | undefined;
  render?: (value: string, openCalendar: () => void) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  name?: string;
  id?: string;
  onDateClear?: () => void;
  onClick?: () => void;
}

export type DateType = DateObject;

export const PersianDatePicker = (props: IProps) => {
  const {
    format,
    plugins,
    dates,
    onChange = () => {},
    isError,
    placeholder = "نسخه در آینده",
    pickerMode,
    maxDate,
    minDate,
    monthFormat,
    render,
    onBlur = () => {},
    name = "",
    id = "",
    onDateClear = () => {},
    onClick = () => {},
  } = props;

  let dateFormat = format || "YYYY/MM/DD";
  switch (pickerMode) {
    case "multiple" || "fullDate": {
      dateFormat = "YYYY/MM/DD";
      break;
    }
    case "onlyYear": {
      dateFormat = "YYYY";
      break;
    }
    case "onlyMonth": {
      dateFormat = monthFormat ?? "MM";
      break;
    }
    case "onlyDay": {
      dateFormat = "DD";
      break;
    }
    default:
      break;
  }
  // const [value, setValue] = useState<TypeDatePicker | TypeDatePicker[] | null>();
  const [open, setOpen] = useState<boolean>(false);
  const [isResetValue, setIsResetValue] = useState<boolean>(false);

  const datePickerRef = useRef<any>(null);

  const handleCloseDatePicker = () => {
    if (datePickerRef.current) datePickerRef.current.closeCalendar();
  };

  const onChangeDate = (selectedDates: TypeDatePicker) => {
    if (!selectedDates) return;
    const date = selectedDates as TypeDatePicker;
    onChange(date);
  };

  const onRemoveDate = () => {
    onDateClear();
    setIsResetValue(true);
    const timer = setTimeout(() => {
      setIsResetValue(false);
    }, 100);
    return () => {
      clearInterval(timer);
    };
  };
  const calanderInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <span
        className={`absolute inset-0 z-20 rounded-2xl transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseDatePicker}
      ></span>

      <DatePicker
        // animations={[opacity({ duration: 300 })]}
        maxDate={maxDate}
        minDate={minDate}
        plugins={plugins}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-center"
        onChange={(data: TypeDatePicker) => onChangeDate(data)}
        containerClassName="w-full"
        ref={datePickerRef}
        multiple={pickerMode === "multiple"}
        onlyYearPicker={pickerMode === "onlyYear"}
        onlyMonthPicker={pickerMode === "onlyMonth"}
        hideYear={pickerMode === "onlyMonth" || pickerMode === "onlyDay"}
        hideMonth={pickerMode === "onlyYear" || pickerMode === "onlyDay"}
        format={dateFormat}
        onClose={() => {
          setOpen(false);
        }}
        onOpen={onClick}
        numberOfMonths={1}
        value={isResetValue ? new Date("") : dates}
        render={(value: string, openCalendar: () => void) => {
          return render ? (
            render(value, openCalendar)
          ) : (
            <Box className="relative">
              <Input
                refInput={calanderInputRef}
                name={name}
                id={id}
                onBlur={onBlur}
                placeholder={placeholder}
                readOnly={true}
                value={pickerMode !== "multiple" ? value : ""}
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
              <Box className="absolute left-2 top-0 h-full flex items-center justify-center gap-1 text-gray-500 cursor-pointer">
                {(dates || calanderInputRef.current?.value) && (
                  <Add className="rotate-45" onClick={onRemoveDate} />
                )}
                <Calendar
                  color="#F9C310"
                  onClick={() => {
                    openCalendar();
                    setOpen(true);
                  }}
                />
              </Box>
            </Box>
          );
        }}
      />
    </>
  );
};
