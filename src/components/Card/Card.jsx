import styles from "../Card/Card.module.css"

export default function Card(props) {
   return (
      <div className={styles.divCard}>
         <button className={styles.botonX} onClick={props.onClose}>X</button>
         <h2 className={styles.h2Name}>{props.name}</h2>
         <img className={styles.image} src={props.image} alt="Card" /> 
         
         <h2 className={styles.specie}>{props.species}</h2>
         <h2 className={styles.genre}>{props.gender}</h2>
         
      </div>
   );
}
