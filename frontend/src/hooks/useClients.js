import api from "../utils/api";
import { useState } from "react";

export default function useClients() {
  async function register(client) {
    try {
      const data = await api
        .post("/clientes/register", client)
        .then((response) => {
          return response.data;
        });
      alert("Cliente cadastrado com sucesso");
    } catch (error) {
      // Tratar erro
      console.log(error);
    }
  }
  async function deleteAllClients() {
    try {
      const data = await api.delete("/clientes/deleteAll").then((response) => {
        return response.data;
      });
      alert("Clientes excluídos com sucesso");
    } catch (error) {
      // Tratar erro
      console.log(error);
    }
  }
  return { register, deleteAllClients };
}
