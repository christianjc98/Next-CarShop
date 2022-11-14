import Modal from "../../components/Modal";
import FormRow from "../../components/FormRow";
import { useAddCustomerMutation } from "./customersApiSlice";
import { useForm } from "../../utils/hooks/useForm";

const CustomersFormModal = ({ openModal, setOpenModal }) => {
  const initialForm = {
    name: "",
    lastname: "",
    phoneNumber: "",
    email: "",
  };

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexPhoneNumber =
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

    if (!form.name.trim()) {
      errors.name = "Field 'Name' is required";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Field 'Name' only accpets letters";
    }
    if (!form.lastname.trim()) {
      errors.lastname = "Field 'Lastname' is required";
    } else if (!regexName.test(form.lastname.trim())) {
      errors.name = "Field 'Lastame' only accpets letters";
    }
    if (!form.email.trim()) {
      errors.email = "Field 'Email' is required";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Email must have a correct format";
    }
    if (!form.phoneNumber.trim()) {
      errors.phoneNumber = "Field 'Phone Number' is required";
    } else if (!regexPhoneNumber.test(form.phoneNumber.trim())) {
      errors.phoneNumber = "Please introduce a valid phone number";
    }
    return errors;
  };

  const [addNewCustomer, result] = useAddCustomerMutation();
  const { form, errors, handleChange, handleSubmit, handleBlur } = useForm(
    initialForm,
    validationsForm,
    addNewCustomer,
    setOpenModal
  );
  return (
    <Modal
      openModal={openModal}
      setOpenModal={setOpenModal}
      title="Añadir Cliente"
    >
      <form onSubmit={handleSubmit} className="form">
        <FormRow
          name="name"
          type="String"
          value={form.name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.name && <p className="input-error">{errors.name}</p>}
        <FormRow
          name="lastname"
          type="String"
          value={form.lastname}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.lastname && <p className="input-error">{errors.lastname}</p>}
        <FormRow
          name="email"
          value={form.email}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.email && <p className="input-error">{errors.email}</p>}
        <FormRow
          name="phoneNumber"
          type="String"
          value={form.phoneNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.phoneNumber && (
          <p className="input-error">{errors.phoneNumber}</p>
        )}
        <button className="btn" type="submit">
          Add
        </button>
      </form>
    </Modal>
  );
};
export default CustomersFormModal;
