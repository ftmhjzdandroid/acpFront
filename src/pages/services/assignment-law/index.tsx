import React from "react";
import { useSearchParams } from "react-router-dom";
import { FolderLayout } from "../../../components/organisms/folder-layout";

export const AssignmenLaw = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("id"));

  return (
    <>
      <FolderLayout />
    </>
  );
};
