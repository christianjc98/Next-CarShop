import { useState } from "react";
import Modal from "../../components/Modal";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      Dashboard
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        <h1>Vnetana modal</h1>
        <p>reutilizable</p>
      </Modal>
    </div>
  );
};
export default Dashboard;
