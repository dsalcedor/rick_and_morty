import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
        <h1>Esta es la pagina sobre mi, Dario Salcedo Romero</h1>
        <img src="../../dario.jpg" alt="darioRick&Morty" className={styles.imagen} />
    </div>
  );
}
