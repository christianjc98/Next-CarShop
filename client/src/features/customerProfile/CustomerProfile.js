import {
  Container,
  Navbar,
} from "../../assets/wrappers/customerProfile/CustomerProfile";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useLazyGetCustomerByIdQuery } from "../clients/customersApiSlice";

const CustomerProfile = () => {
  const { id } = useParams();
  const [getCustomerById, { data, isLoading }] = useLazyGetCustomerByIdQuery();
  const customer = data.customer;

  useEffect(() => {
    getCustomerById(id);
  }, [id]);

  return (
    <Container>
      <Navbar>
        <h2>
          {customer.name} {customer.lastname}
        </h2>
      </Navbar>
    </Container>
  );
};
export default CustomerProfile;
