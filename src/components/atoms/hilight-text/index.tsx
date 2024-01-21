interface ItemModel {
  id: string;
  name: string;
}

interface Iprops {
  keyword: string;
  item: ItemModel;
}

export function HilightText(props: Iprops) {
  const { keyword, item } = props;

  let text = item.name;
  let highlight = keyword;

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return (
    <span className="text-sm">
      {item.id.toString().replace(/\d/g, (d: any) => "۰۱۲۳۴۵۶۷۸۹"[d])}
      {"- "}
      {parts.map((part, i) => (
        <span
          key={i}
          style={
            part.toLowerCase() === highlight.toLowerCase()
              ? { fontWeight: "bold", backgroundColor: "#ffeb3b" }
              : {}
          }
        >
          {part}
        </span>
      ))}{" "}
    </span>
  );
}
