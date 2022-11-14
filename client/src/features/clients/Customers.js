import { useState } from "react";
import {
  ActionContainer,
  Container,
} from "../../assets/wrappers/customers/Customers";
import LoadSpinner from "../../components/LoadSpinner";
import PageBtnContainer from "../../components/PaginationComponent";
import Table from "./Table";
import { useGetAllCustomersQuery } from "./customersApiSlice";
import CustomersFormModal from "./CustomersFormModal";

import DeleteCustomerModal from "./DeleteCustomerModal";

const Customers = () => {
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const { data, isLoading } = useGetAllCustomersQuery(page);

  const columnNames = [
    "Nombre",
    "Apellido",
    "Telefono",
    "Dirección",
    "Ciudad",
    "RFC",
    "Email",
    "Actions",
  ];
  let content;

  if (data) {
    content = (
      <div>
        <Table
          data={data.customers}
          columnNames={columnNames}
          setOpenModal={setDeleteConfirmation}
        />
        {data.numOfPages > 0 && (
          <PageBtnContainer page={page} setPage={setPage} />
        )}
      </div>
    );
  } else if (isLoading) {
    content = <LoadSpinner />;
  }

  return (
    <Container>
      <ActionContainer>
        <button className="btn" onClick={() => setOpenModal(true)}>
          Añadir cliente
        </button>
      </ActionContainer>
      {content}
      <CustomersFormModal openModal={openModal} setOpenModal={setOpenModal} />
      <DeleteCustomerModal
        openModal={deleteConfirmation}
        setOpenModal={setDeleteConfirmation}
      />
    </Container>
  );
};

export default Customers;
