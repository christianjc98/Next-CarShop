import Modal from "../../components/Modal";
import { useSelector } from "react-redux";
import { selectCustomerToModify, setCustomerToModify } from "./customersSlice";
import { useDeleteCustomerMutation } from "./customersApiSlice";

const DeleteCustomerModal = ({ openModal, setOpenModal }) => {
  const customerToModify = useSelector(selectCustomerToModify);
  const [deleteCustomer] = useDeleteCustomerMutation();

  const handleDeleteConfirmation = async () => {
    await deleteCustomer(customerToModify._id);
    setCustomerToModify(null);
    setOpenModal(false);
  };
  return (
    <Modal setOpenModal={setOpenModal} openModal={openModal}>
      <h3>¿Estas seguro que quieres eliminar a este cliente?</h3>
      <div className="deleteConfirmationActions">
        <button className="btn" onClick={handleDeleteConfirmation}>
          Si
        </button>
        <button className="btn">No</button>
      </div>
    </Modal>
  );
};
export default DeleteCustomerModal;
