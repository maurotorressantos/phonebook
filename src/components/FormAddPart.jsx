import { useState } from "react";

const FormAddPart = ({ onAddPhone }) => {
  const [formValues, setFormValues] = useState({
    nameInput: "",
    numberInput: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const { nameInput, numberInput } = formValues;

    if (!nameInput || !numberInput) {
      alert("Por favor completa todos los campos.");
      return;
    }

    onAddPhone(formValues);

    // Limpiar el formulario
    setFormValues({ nameInput: "", numberInput: "" });
  };
  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="nameInput"
        value={formValues.nameInput}
        onChange={handleChange}
        placeholder="Nombre de contacto"
      />
      <br />
      <input
        type="text"
        name="numberInput"
        value={formValues.numberInput}
        onChange={handleChange}
        placeholder="Número de contacto"
      />
      <br />
      <br />
      <button type="submit">Agregar contacto</button>
    </form>
  );
};

export default FormAddPart;
