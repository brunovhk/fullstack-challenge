import styles from "./TabelaClientes.module.css";
import { useState, useEffect } from "react";
// Contexts
import api from "../../../utils/api";

function TabelaClientes() {
  const [client, setClients] = useState([]);
  const [clientsMap, setClientsMap] = useState([]);

  useEffect(() => {
    try {
      api.get("/clientes").then((response) => {
        setClients(response.data.clientes);
      });
    } catch (error) {
      // Tratar erro
      console.log(error);
    }
  });
  return (
    <section>
      <div className={styles.container_tabela}>
        <table className={styles.tabela}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Rua</th>
              <th>Cidade</th>
              <th>País</th>
              <th>Peso</th>
              <th>Lat</th>
              <th>Lng</th>
            </tr>
          </thead>
          <tbody>
            {client.length > 0 &&
              client.map((cliente) => (
                <tr key={cliente._id}>
                  <td className={styles.td}>{cliente.nome}</td>
                  <td className={styles.td}>{cliente.endereco["rua"]}</td>
                  <td className={styles.td}>{cliente.endereco["cidade"]}</td>
                  <td className={styles.td}>{cliente.endereco["pais"]}</td>
                  <td className={styles.td}>{cliente.peso_produto} KG</td>
                  <td className={styles.td}>{cliente.endereco["lat"]}</td>
                  <td className={styles.td}>{cliente.endereco["lng"]}</td>
                </tr>
              ))}
          </tbody>
        </table>
        {client.length === 0 && (
          <p className={styles.p}>Não há Clientes cadastrados</p>
        )}
      </div>
    </section>
  );
}

export default TabelaClientes;
