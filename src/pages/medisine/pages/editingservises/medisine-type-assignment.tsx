import { useState } from "react";
import { TickCircle,} from "iconsax-react";
import { useCustomNav } from "../../../../hook/useNavigate";
import { FolderLayout } from "../../../../components/organisms/folder-layout";

export default function MedisineTypeAssignmet() {
  const Navigate = useCustomNav();
  const [folder, setfolder] = useState<boolean>(true);
  const [type, settype] = useState<boolean>(false);
  const list = [
    {
      name: "تعداد جلسات",
      ahnase: 3423,
      namad: "نوع شریک کاری",
      etbar: <TickCircle className="text-success-700" />,
    },
    {
      name: "تعداد جلسات",
      ahnase: 3423,
      namad: "نوع شریک کاری",
      etbar: <TickCircle className="text-success-700" />,
    },
    {
      name: "تعداد جلسات",
      ahnase: 3423,
      namad: "نوع شریک کاری",
      etbar: <TickCircle className="text-success-700" />,
    },
  ];
  return (
    <>
      <FolderLayout />
    </>
  );
}
