import styles from "./MapClientes.module.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useEffect } from "react";
import api from "../../../utils/api";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Contexts

function MapClientes() {
  const [clientsMap, setClientsMap] = useState([]);
  useEffect(() => {
    try {
      api.get("/clientes").then((response) => {
        setClientsMap(response.data.clientes);
      });
    } catch (error) {
      // Tratar erro
      console.log(error);
    }
  });
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
  return (
    <div className={styles.map_clientes}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {clientsMap.length > 0 &&
          clientsMap.map((cliente) => (
            <Marker position={[cliente.endereco.lat, cliente.endereco.lng]} key={cliente._id}>
              <Popup>
                <p>{cliente.nome}</p>
                <p>{cliente.peso_produto}</p>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}

export default MapClientes;
