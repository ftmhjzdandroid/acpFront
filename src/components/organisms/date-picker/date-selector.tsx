import React, { useState } from "react";
import { Calendar, DateObject } from "react-multi-date-picker";
import { Loading, Typography } from "../../atoms";
// eslint-disable-next-line import/no-extraneous-dependencies
import persian from "react-date-object/calendars/persian";
// eslint-disable-next-line import/no-extraneous-dependencies
import persian_fa from "react-date-object/locales/persian_fa";
import { Button, Modal } from "../../molecules";
import CalendarInline from "./calendar";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

interface IProps {
  isLoading?: boolean;
  onDate?: (date: string) => void;
}

const DateSelector = (props: IProps) => {
  const { onDate = () => {}, isLoading } = props;
  // const date = new DateObject();
  const [date, setDate] = useState<DateObject>(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  const [dateCalendar, setDateCalendar] = useState<DateObject>(
    new DateObject({ calendar: persian, locale: persian_fa })
  );
  // const date = new DateObject({ calendar: persian, locale: persian_fa });
  const [dateFormat, setDateFormat] = useState<string>(date.format());
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onNext = () => {
    date.add(1, "day");
    applayDate();
  };

  const onPrev = () => {
    date.add(-1, "day");
    applayDate();
  };

  const setDateFromCalendar = (d: DateObject) => {
    date.setDate(d);
    applayDate();
    setIsOpen(false);
  };

  const applayDate = () => {
    setDateFormat(date.format());
    onDate(date.format());
  };
  return (
    <>
      <Modal isOpen={isOpen} size="w-auto" onBackdrop={() => setIsOpen(false)}>
        {/* <Calendar
          shadow={false}
          calendar={persian}
          locale={persian_fa}
          value={dateCalendar}
          className="md:mx-5 border-0"
          onChange={(d: DateObject) => {
            setDateCalendar(d);
          }}
        /> */}
        <CalendarInline
          value={dateCalendar}
          onChange={(d: DateObject) => {
            setDateCalendar(d);
          }}
        />
        <div className="flex gap-2 items-center justify-center mt-4">
          <Button onClick={() => setDateFromCalendar(dateCalendar)}>ثبت</Button>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            بازگشت
          </Button>
        </div>
      </Modal>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          <div
            onClick={onPrev}
            className="w-6 h-6 hover:bg-blue-900
            border-0 bg-primary text-white 
            rounded-full shadow flex justify-center items-center cursor-pointer transition duration-300"
          >
            <ArrowRight2 descent="روز قبل" className="w-16" />
          </div>

          <div
            className="flex flex-col items-center cursor-pointer relative"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {/* <span className="absolute -bottom-4">{isLoading && <Loading /> }</span> */}
            <Typography type="h4">{dateFormat}</Typography>
            <Typography className="text-sm">
              {date.format("dddd DD MMMM")}
            </Typography>
          </div>
          <div
            onClick={onNext}
            className="w-6 h-6 hover:bg-blue-900
            border-0 bg-primary text-white 
            rounded-full shadow flex justify-center items-center cursor-pointer transition duration-300"
          >
            <ArrowLeft2 descent="روز بعد" className="w-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DateSelector;
