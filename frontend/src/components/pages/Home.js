import styles from "../form/Form.module.css";
// Contexts
import FormCliente from "../form/Form";
import TabelaClientes from "../layouts/TabelaClientes/TabelaClientes";
import MapClientes from "../layouts/MapClientes/MapClientes";

function Home() {
  return (
    <section className={styles.form_container}>
      <FormCliente />
      <MapClientes />
      <TabelaClientes />
    </section>
  );
}

export default Home;
