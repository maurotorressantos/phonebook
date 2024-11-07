import { useState } from "react";

const FormAddPart = ({ onAddPhone }) => {
  const [formValues, setFormValues] = useState({
    nameInput: "",
    numberInput: "",
    contentInput: "",
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

    const { nameInput, numberInput, contentInput } = formValues;

    if (!nameInput || !numberInput || !contentInput) {
      alert("Por favor completa todos los campos.");
      return;
    }

    onAddPhone(formValues);

    // Limpiar el formulario
    setFormValues({ nameInput: "", numberInput: "", contentInput: "" });
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
      <textarea
        name="contentInput"
        id="contentInput"
        value={formValues.contentInput}
        onChange={handleChange}
        placeholder="Descripción del usuario"
      />
      <br />
      <button type="submit">Agregar contacto</button>
    </form>
  );
};

export default FormAddPart;
