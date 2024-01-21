import React from "react";
import { DateObject } from "react-multi-date-picker";
import { Typography } from "../../atoms";
// eslint-disable-next-line import/no-extraneous-dependencies
import persian from "react-date-object/calendars/persian";
// eslint-disable-next-line import/no-extraneous-dependencies
import persian_fa from "react-date-object/locales/persian_fa";

export const DateCurrent = () => {
  const currentDate = () => {
    return new DateObject()
      .setCalendar(persian)
      .setLocale(persian_fa)
      .setFormat("dddd DD MMMM YYYY")
      .format();
  };
  return <Typography className="text-right">امروز {currentDate()}</Typography>;
};

export const today = () =>
  new DateObject({ calendar: persian, locale: persian_fa });

export const currentDate = () => {
  const month =
    today().month.number < 9
      ? `0${today().month.number}`
      : today().month.number;
  const day = today().day < 9 ? `0${today().day}` : today().day;
  return `${today().year}/${month}/${day}`;
};
