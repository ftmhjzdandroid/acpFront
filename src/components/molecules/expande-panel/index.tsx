import { ComponentType, ReactNode } from "react";
import { Disclosure, Transition } from "@headlessui/react";

type ReactFragment = Iterable<ReactNode>;
interface IProps {
  className?: string;
  defaultOpen?: boolean;
  children: ((close?: () => void) => JSX.Element) | ReactFragment;
  buttonComponent: ComponentType<{ open: boolean }>;
}
export const ExpandePanel = (props: IProps) => {
  const { children, className, buttonComponent: DisclosureButton, defaultOpen } = props;

  return (
    <Disclosure as="div" defaultOpen={defaultOpen}>
      {({ open, close }) => (
        <>
          <Disclosure.Button as={"button"} className="w-full">
            <DisclosureButton open={open} />
          </Disclosure.Button>
          <Transition
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel className={className + " mt-6"}>{typeof children === "object" ? children : children(close)}</Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};
