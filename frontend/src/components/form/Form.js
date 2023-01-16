import Input from "./Input";
import styles from "../form/Form.module.css";
import { useState, useContext, useEffect } from "react";
// Contexts
import { Context } from "../../context/ClientContext";
import api from "../../utils/api";

function FormCliente() {
  const [client, setClients] = useState([]);
  const [endereco, setEndereco] = useState([]);
  const [lat, setLat] = useState([]);
  const [lng, setLng] = useState([]);
  const { register, deleteAllClients } = useContext(Context);

  function handleChange(e) {
    setClients({ ...client, [e.target.name]: e.target.value });
  }
  function handleChangeEndereco(e) {
    api.get(`/api/nominatim/search/${e.target.value}`).then((response) => {
      setEndereco(response.data.endereco);
      client.endereco = response.data.enderecos[0];
      setLat(client.endereco.lat);
      setLng(client.endereco.lon);
    });
  }
  function handleClick(e) {
    deleteAllClients();
  }
  function handleSubmit(e) {
    e.preventDefault();
    register(client);
    e.target.reset();
  }
  return (
    <section className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        <Input
          text="Nome"
          type="text"
          name="nome"
          placeholder="Nome Cliente"
          handleOnChange={handleChange}
        />
        <Input
          text="Peso da entrega"
          type="number"
          name="peso_produto"
          placeholder="Peso da Entrega"
          handleOnChange={handleChange}
        />
        <Input
          text="Endereco"
          type="text"
          name="search"
          placeholder="Endereço Cliente"
          handleOnChange={handleChangeEndereco}
        />
        <Input
          text="Latitude"
          type="number"
          name="lat"
          placeholder="Latitude"
          value={lat || "Latitude"}
          handleOnChange={handleChangeEndereco}
        />
        <Input
          text="Longitude"
          type="number"
          name="lng"
          placeholder="Longitude"
          value={lng || "Longitude"}
          handleOnChange={handleChangeEndereco}
        />
        <input type="submit" value="Cadastrar Cliente" />
      </form>
      <input type="button" value="Resetar Cadastro" onClick={handleClick} />
    </section>
  );
}

export default FormCliente;
