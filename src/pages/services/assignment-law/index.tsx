import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { FolderLayout } from "../../../components/organisms/folder-layout";

export const AssignmenLaw = () => {
  const param = useParams();
  console.log(param, "***");

  return (
    <>
      <FolderLayout />
    </>
  );
};
