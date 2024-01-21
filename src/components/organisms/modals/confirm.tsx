import React from "react";
import { Typography } from "../../atoms";
import { Button, Modal } from "../../molecules";

interface IProps {
  isOpen: boolean;
  close?: () => void;
  confirm?: () => void;
}

export const ConfirmModals = (props: IProps) => {
  const { isOpen, close, confirm } = props;
  return (
    <Modal isOpen={isOpen} onBackdrop={close}>
      <div className="flex flex-col justify-center items-center gap-4">
        <Typography type="h2">آیا از حذف اطمینان دارید؟</Typography>
        <div className="flex gap-2">
          <Button onClick={confirm}>حذف</Button>
          <Button variant="outline" onClick={close}>
            خیر
          </Button>
        </div>
      </div>
    </Modal>
  );
};
