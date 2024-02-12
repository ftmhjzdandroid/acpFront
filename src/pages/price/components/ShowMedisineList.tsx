import { Typography } from "../../../components/atoms";

type Props = {
  index: number;
  item: {
    startday:string,
    tqiir :number,
    t:boolean,
    tahodprice:number,
    pishprice:number ,
    irc:number,
    jencode:number,
    name :string,
    vaz:number
  };
};
export default function ShowMedisineList(props: Props) {
  const { item, index } = props;
   let classnames = "bg-success-200 text-success-700";
   let vazeuat = "";
switch(item.vaz){
  case 1:
 vazeuat = "border-l-2 border-l-success-700"
  break;
  case 2:
 vazeuat = "border-l-2 border-l-danger-700"
  break;
  case 3:
 vazeuat = "border-l-2 border-l-info-700"
  break;
  case 4:
 vazeuat = "border-l-2 border-l-warning-700"
  break;
  case 5:
 vazeuat = "border-l-2 border-l-neutral-700"
  break;
  case 6:
 vazeuat = "border-l-2 border-l-neutral-800"
  break;
  case 7:
 vazeuat = "border-l-2 border-l-[#F9C310]"
  break;
  default:
}

  return (
      <div
        key={index}
        className={`${
          index % 2 == 0 ? "bg-background-300" : ""
        } grid grid-cols-7 mt-2  p-4 rounded-md text-xs  ${vazeuat}`}
      >
       
          <Typography className="text-center" type="p">
            {item.startday}
          </Typography>

        {item.tqiir && (
          <Typography className={`${item.t ? "text-success-700":"text-red-700"} text-center`} type="p">
            {item.tqiir}
          </Typography>
        )}
        {item.tahodprice && (
          <Typography className="text-center" type="p">
            {item.tahodprice}
          </Typography>
        )}
        {item.pishprice && (
          <Typography className="text-center" type="p">
            {item.pishprice}
          </Typography>
        )}
        {item.irc && (
          <Typography className="text-center" type="p">
            {item.irc}
          </Typography>
        )} 
        {item.jencode && (
          <Typography className="text-center" type="p">
            {item.jencode}
          </Typography>
        )}
        {item.name && (
          <Typography className={`text-center`} type="p">
            {item.name}
          </Typography>
        )}

      </div>
  );
}
