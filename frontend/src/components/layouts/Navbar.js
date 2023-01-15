import { Link } from "react-router-dom";

import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2>FullStack Challenge</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
