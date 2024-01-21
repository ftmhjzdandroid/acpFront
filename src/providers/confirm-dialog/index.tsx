import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { logger } from "../../utils/logger";
import { Button, Modal } from "../../components/molecules";
import { Typography } from "../../components/atoms";
import { Seperator } from './../../components/molecules/seperator/index';
interface AlertModel {
  type?: "error" | "succes" | "warn";
  isOpen?: boolean;
  title?: string;
  description?: React.ReactNode;
  confirmBtnLabel?: string;
  cancelBtnLabel?: string;

  onClose?: () => void;
  onConfirm?: () => void;
}
const ConfirmDialog = createContext<(data: AlertModel) => void>(() => { });

interface IProps {
  children: React.ReactNode;
}
export function ConfirmDialogProvider(props: IProps) {
  logger.log("==================================== ConfirmDialogProvider ");
  const { children } = props;
  const [state, setState] = useState<AlertModel>({ isOpen: false });
  const fn = useRef<(choice: boolean) => void>(() => { });

  const confirm = useCallback(
    (data: AlertModel) => {
      return new Promise((resolve) => {
        setState({ ...data, isOpen: true });
        fn.current = (choice) => {
          resolve(choice);
          if (choice) {
            if (data.onConfirm) data.onConfirm();
          } else {
            if (data.onClose) data.onClose();
          }
          setState({ ...data, isOpen: false });
        };
      });
    },
    [setState]
  );

  const close = () => {
    fn.current(false);
  };

  const getStyle = () => {
    switch (state.type) {
      case "error":
        return "text-red-600";
      case "succes":
        return "text-green-600";
      case "warn":
        return "text-yellow-600";
      default:
        return "text-black-600";
    }
  };

  return (
    <ConfirmDialog.Provider value={confirm}>
      {children}
      <Modal isOpen={state.isOpen ?? false} onBackdrop={close}>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-center">
            {state.title && (
              <Seperator position="center" className={getStyle()}>
                {state.title}
              </Seperator>
            )}
            {state.description && (
              <Typography type="h3" className="mt-1">
                {state.description ?? " آیا از حذف اطمینان دارید؟"}
              </Typography>
            )}
          </div>
          <div className="flex justify-center gap-2">
            <Button onClick={() => fn.current(true)}>
              {state.confirmBtnLabel ?? "بلی"}
            </Button>
            {state.cancelBtnLabel && (
              <Button variant="outline" onClick={close}>
                {state.cancelBtnLabel ?? "خیر"}
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </ConfirmDialog.Provider>
  );
}

export default function useConfirm() {
  return useContext(ConfirmDialog);
}
