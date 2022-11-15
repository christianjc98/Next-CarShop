import { useState } from "react";
import {
  ActionContainer,
  Container,
} from "../../assets/wrappers/customers/Customers";
import LoadSpinner from "../../components/LoadSpinner";
import PageBtnContainer from "../../components/PaginationComponent";
import Table from "./Table";
import { useLazyGetAllCustomersQuery } from "./customersApiSlice";
import CustomersFormModal from "./CustomersFormModal";
import DeleteCustomerModal from "./DeleteCustomerModal";
import Searchbar from "../../components/Searchbar";
import { useEffect } from "react";
import { setCustomerSearch } from "./customersSlice";

const Customers = () => {
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [search, setSearch] = useState("");
  const [getCustomers, { data, isLoading }] = useLazyGetAllCustomersQuery();

  useEffect(() => {
    getCustomers({ page, search });
  }, [page, search]);

  const handleSearch = (e) => {
    if (isLoading) return;
    setSearch(e.target.value);
    setCustomerSearch(e.target.value);
  };

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
        <Searchbar handleSearch={handleSearch} search={search} />
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
