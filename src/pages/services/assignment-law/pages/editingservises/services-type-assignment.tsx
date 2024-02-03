import React, { useState } from "react";
import { Typography } from "../../../../../components/atoms";
import { useCustomNav } from "../../../../../hook/useNavigate";
import {
  ArrowDown2,
  ArrowLeft,
  Folder2,
  FormatSquare,
  TickCircle,
} from "iconsax-react";
import { Button } from "../../../../../components/molecules";
import { FolderLayout } from "../../../../../components/organisms/folder-layout";

export default function ServicesTypeAssignmet() {
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