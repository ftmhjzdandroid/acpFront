import React from "react";

interface IProps {
  opacity: string;
  fill?: string;
  className: string;
}

export const NotificationIcon = ({ opacity, fill, className }: IProps) => {
  return (
    <svg className={className} width="489" height="489" viewBox="0 0 489 489" fill={fill ?? "none"} xmlns="http://www.w3.org/2000/svg">
      <path opacity={opacity} d="M244.899 59.2894C177.458 59.2894 122.649 114.098 122.649 181.539V240.423C122.649 252.852 117.352 271.801 111.036 282.396L87.6045 321.312C73.1382 345.354 83.122 372.046 109.609 381.011C197.426 410.351 292.169 410.351 379.986 381.011C404.639 372.861 415.438 343.724 401.991 321.312L378.559 282.396C372.447 271.801 367.149 252.852 367.149 240.423V181.539C367.149 114.302 312.137 59.2894 244.899 59.2894Z" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" />
      <path opacity={opacity} d="M282.601 65.2C276.285 63.3663 269.765 61.94 263.041 61.125C243.481 58.68 224.736 60.1063 207.214 65.2C213.123 50.1225 227.793 39.5275 244.908 39.5275C262.023 39.5275 276.693 50.1225 282.601 65.2Z" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
      <path opacity={opacity} d="M306.023 403C306.023 436.619 278.517 464.125 244.898 464.125C228.19 464.125 212.705 457.198 201.703 446.195C190.7 435.193 183.773 419.707 183.773 403" stroke-width="4" stroke-miterlimit="10" />
    </svg>
  );
}
