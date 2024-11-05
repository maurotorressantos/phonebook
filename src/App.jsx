import PhoneBook from "./components/PhoneBook";
import FormAddPart from "./components/FormAddPart";
import "./App.css";
import { useEffect, useState } from "react";
import phoneService from "./services/phones";

function App() {
  const [numbers, setPhoneBook] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  const handleAddPhone = ({ nameInput, numberInput }) => {
    if (
      numbers.some(
        (number) => number.name === nameInput || number.phone === numberInput
      )
    ) {
      alert(`${nameInput} is already added to phonebook`);
    } else {
      phoneService
        .create({
          name: nameInput,
          phone: numberInput,
        })
        .then((newPhone) => {
          setPhoneBook([...numbers, newPhone]);
        })
        .catch((error) => console.log(error));
    }
  };

  const styles = {
    backgroundColor: "red",
    color: "white",
    padding: 25,
    textAlign: "center",
    width: "100%",
    marginTop: 5,
    marginBottom: 5,
  };

  const handleChangeStatus = (id) => {
    let toUpdateElement = numbers.filter((number) => number.id === id);
    toUpdateElement = toUpdateElement[0];

    toUpdateElement = {
      ...toUpdateElement,
      important: !toUpdateElement.important,
    };

    phoneService
      .update(id, toUpdateElement)
      .then((phoneUpdated) => {
        setPhoneBook(
          numbers.map((number) => (number.id === id ? phoneUpdated : number))
        );
      })
      .catch((error) => console.log(error));
  };

  const handleDelete = (id) => {
    phoneService
      .destroy(id)
      .then((phoneDelete) => {
        const toDeleteElement = numbers.filter(
          (number) => number.id !== phoneDelete.id
        );

        setPhoneBook(toDeleteElement);
        setAlertMessage(
          `${phoneDelete.name} ha sido eliminado de tus contactos`
        );
        setTimeout(() => {
          setAlertMessage("");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  const getExternalData = () => {
    phoneService
      .getAll()
      .then((allPhones) => setPhoneBook(allPhones))
      .catch((error) => console.log(error));
  };

  useEffect(getExternalData, []);

  return (
    <>
      <FormAddPart onAddPhone={handleAddPhone} />
      {alertMessage && <div style={styles}>{alertMessage}</div>}
      <PhoneBook
        numbers={numbers}
        onChangeStatus={handleChangeStatus}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
