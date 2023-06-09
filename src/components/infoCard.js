
import styles from "../styles/infoCardStyles.module.css";

function InfoCard(props) {
  return (
    <div className={styles.infoCardContainer}>

        <p className={styles.infoTitle}>{props.title}</p>

        <p className={styles.infoDay}>Today</p>

        <p className={styles.infoValue}>
            <i className="fa-solid fa-indian-rupee-sign"></i>
            {props.value}
        </p>
      
    </div>
  );
}

export default InfoCard;
