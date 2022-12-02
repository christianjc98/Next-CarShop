import { Container } from "../../assets/wrappers/customerProfile/BasicInformation";
import FormRow from "../../components/FormRow";
import { useForm } from "../../utils/hooks/useForm";
import { useEditCustomerMutation } from "./customersApiSlice";

const BasicInformation = ({ customer }) => {
  const initialForm = {
    name: customer.name,
    lastname: customer.lastname,
    phoneNumber: customer.phoneNumber,
    email: customer.email || "",
    address: customer.address || "",
    city: customer.city || "",
    rfc: customer.rfc || "",
  };

  const id = customer._id;

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

  const [editCustomer] = useEditCustomerMutation();

  const { form, errors, handleChange, handleErrors, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleErrors();
    if (Object.keys(errors).length === 0) {
      try {
        await editCustomer({ customer: form, id });
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };
  return (
    <Container>
      <form className="form" onSubmit={handleSubmit}>
        <h3>Información Basica</h3>
        <FormRow
          name="name"
          type="String"
          labelText="Nombre"
          value={form.name}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.name && <p className="input-error">{errors.name}</p>}
        <FormRow
          name="lastname"
          type="String"
          labelText="Apellido"
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
          labelText="Número telefonico"
          type="String"
          value={form.phoneNumber}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.phoneNumber && (
          <p className="input-error">{errors.phoneNumber}</p>
        )}
        <FormRow
          name="address"
          labelText="Dirección"
          type="String"
          value={form.address}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.phoneNumber && (
          <p className="input-error">{errors.phoneNumber}</p>
        )}
        <FormRow
          name="city"
          labelText="Ciudad"
          type="String"
          value={form.city}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.phoneNumber && (
          <p className="input-error">{errors.phoneNumber}</p>
        )}
        <FormRow
          name="rfc"
          labelText="RFC"
          type="String"
          value={form.rfc}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.phoneNumber && (
          <p className="input-error">{errors.phoneNumber}</p>
        )}
        <button className="btn" type="submit">
          Guardar
        </button>
      </form>
    </Container>
  );
};
export default BasicInformation;
