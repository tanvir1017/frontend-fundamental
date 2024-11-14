import { cn } from "cn-utility";
import { createPortal } from "react-dom";

const Modal = ({ children, isOpen, onCloseModal }) => {
  return createPortal(
    <div
      className={cn("bg-gray-400 fixed inset-0 invisible", {
        visible: isOpen,
      })}
    >
      {children}
    </div>,
    document.getElementById("portal")!
  );
};

export default Modal;
