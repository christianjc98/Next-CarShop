import {
  Container,
  Navbar,
  ProfileTabs,
} from "../../assets/wrappers/customerProfile/CustomerProfile";
import { Outlet, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLazyGetCustomerByIdQuery } from "../clients/customersApiSlice";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GrLocation, GrDocument } from "react-icons/gr";
import { FaCity } from "react-icons/fa";
import Tabs from "../../components/Tabs";

const CustomerProfile = () => {
  const { id } = useParams();
  const [getCustomerById, { data, isLoading }] = useLazyGetCustomerByIdQuery();

  useEffect(() => {
    getCustomerById(id);
  }, [id]);

  let content;
  if (data) {
    const customer = data.customer;
    console.log(customer);
    content = (
      <>
        <div className="header">
          <div className="customer-icon">
            {customer.name.charAt(0)}
            {customer.lastname.charAt(0)}
          </div>
          <h2>
            {customer.name} {customer.lastname}
          </h2>
          <div className="updated-at">
            <div className="title">Ultima modificación:</div>
            {customer.updatedAt}
          </div>
        </div>
        <div className="nav-info">
          <div className="phone">
            <div className="title">
              <AiOutlinePhone /> Telefono
            </div>
            {customer.phoneNumber}
          </div>
          <div className="email">
            <div className="title">
              <AiOutlineMail /> Email
            </div>
            {customer.email}
          </div>
          <div className="address">
            <div className="title">
              <GrLocation /> Dirección
            </div>
            {customer.address || "Desconocido"}
          </div>
          <div className="city">
            <div className="title">
              <FaCity /> Ciudad
            </div>
            {customer.city || "Desconocido"}
          </div>
          <div className="rfc">
            <div className="title">
              <GrDocument /> RFC
            </div>
            {customer.rfc || "Desconocido"}
          </div>
        </div>
      </>
    );
  }

  const tabs = [
    { name: "Información", mapping: "/info" },
    { name: "Coches", mapping: "/coches" },
    { name: "Historial de ordenes", mapping: "/historial" },
  ];
  return (
    <Container>
      <Navbar>{content}</Navbar>
      <ProfileTabs>
        <Tabs tabsInfo={tabs} />
      </ProfileTabs>
      <Outlet />
    </Container>
  );
};
export default CustomerProfile;
