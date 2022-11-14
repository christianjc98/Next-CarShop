import { useEffect } from "react";
import { useState } from "react";

export const useForm = (initialForm, validateForm, apiCall, setOpenModal) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        const response = await apiCall(form);
        setLoading(false);
        setResponse(true);
        setForm(initialForm);

        setTimeout(() => {
          setResponse(false);
        }, 5000);
        console.log(response);

        if (response.data.status === 201) {
          setOpenModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
