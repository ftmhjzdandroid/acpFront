import{ Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

type IProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  padding?: string;
  size?: string;
  opacity?: number;
  onOk?: () => void;
  onClose?: () => void;
  onBackdrop?: () => void;
};

export const Modal = (props: IProps) => {
  const { isOpen, opacity, size, padding, children, onBackdrop = () => { } } = props;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onBackdrop}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={`fixed inset-0 bg-gray-300 ${opacity ? `bg-opacity-${opacity}` : "bg-opacity-50"}`} />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                as="div"
                // overflow-hidden
                className={` p-5 transform rounded-2xl bg-[#ffffff] ${padding ?? "md:p-6"
                  } text-right align-middle shadow-xl transition-all`}
              >
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
