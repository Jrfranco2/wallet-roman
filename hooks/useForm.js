import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);
  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  return { form, setForm, handleChange };
};
