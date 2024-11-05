import { useState } from "react";
import Header from "./Header";

const PhoneBook = ({ numbers, onChangeStatus, onDelete }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredNumbers = numbers.filter((number) =>
    number.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangeStatus = (id) => onChangeStatus(id);
  const handleDelete = (id) => onDelete(id);

  return (
    <>
      <Header content="Numbers" />

      <input
        type="text"
        name="inputSearch"
        id="inputSearch"
        value={search}
        onChange={handleChange}
      />
      {filteredNumbers &&
        filteredNumbers.map((number, index) => (
          <div key={index}>
            {number.name} - {number.phone} -{" "}
            <b>{number.important ? "Importante!" : ""} </b>
            <button onClick={() => handleChangeStatus(number.id)}>
              {number.important ? "No importante" : "Importante"}
            </button>
            <button onClick={() => handleDelete(number.id)}>delete</button>
          </div>
        ))}
    </>
  );
};

export default PhoneBook;
