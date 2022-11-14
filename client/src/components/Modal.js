import {
  CloseBtn,
  ModalContainer,
  ModalContent,
  ModalHeader,
  Overlay,
} from "../assets/wrappers/components/Modal";
import { FaTimes } from "react-icons/fa";

const Modal = ({ children, openModal, setOpenModal, title }) => {
  return (
    <>
      {openModal && (
        <Overlay>
          <ModalContainer>
            <ModalHeader>
              <h3>{title}</h3>
            </ModalHeader>
            <CloseBtn onClick={() => setOpenModal(false)}>
              <FaTimes />
            </CloseBtn>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};
export default Modal;
