import React, { useState } from "react";
import Card from "../compound/Card";
import Input from "../compound/Input";
import Button from "../compound/Button";

const InputCard = ({createPerson}) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && lastname && birthday) {
      createPerson({ name, lastname, birthday });
      setName("");
      setLastname("");
      setBirthday("");
    }
  };

  return (
    <Card title="Registrar cliente">
      <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Input
          label="Apellido"
          value={lastname}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <Input
          label="Fecha de Nacimiento"
          type="date"
          value={birthday}
          onChange={(e) => {
            setBirthday(e.target.value);
          }}
        />
        <Button text="Agregar usuario" type="submit" />
      </form>
    </Card>
  );
};

export default InputCard;
