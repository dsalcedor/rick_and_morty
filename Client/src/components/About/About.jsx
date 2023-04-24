import styles from "./About.module.css";
import img from '../../gorickyourself.jpg'

export default function About() {
  return (
    <div className={styles.container}>
        <h1>Esta es la pagina sobre mi, Dario Salcedo Romero</h1>
        <img src={img} alt="darioRick&Morty" className={styles.imagen} />
    </div>
  );
}
