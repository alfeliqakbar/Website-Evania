import React, {forwardRef, useImperativeHandle} from "react";
import ReactDOM from "react-dom";
import { ModalBackdrop, ModalBox, ModalWrapper } from "./modalElements";

const Modal = forwardRef((props,ref) => {
    const [display, setDisplay] = React.useState(true);

    useImperativeHandle(ref, () => {
    return {
        openModal: () => open(),
        close: () => close()
    }
    });

    const open = () => {
    setDisplay(true)
    };

    const close = () => {
    setDisplay(false);
    };

    if (display) {
    return ReactDOM.createPortal(
        <ModalWrapper>
        <ModalBackdrop onClick={close} className={"modal-backdrop"} />
        <ModalBox className={"modal-box"}>
        {props.children}
        </ModalBox>
        </ModalWrapper>, document.getElementById("modal-root"))
    }

    return null;

});

export default Modal