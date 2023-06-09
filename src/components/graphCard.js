
import styles from "../styles/graphCardStyles.module.css";
import GraphBarHolder from "./graphBarHolder";

function GarphCard() {
  return (
    <div className={styles.graphContainer}>

        <p className={styles.graphTitle}>
            <i className="fa-solid fa-chart-column"></i>
            Statistics
        </p>

        <GraphBarHolder />
      
    </div>
  );
}

export default GarphCard;
