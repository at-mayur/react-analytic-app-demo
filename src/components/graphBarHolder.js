
import styles from "../styles/graphBarHolderStyles.module.css";
import GraphBar from "./graphBar";

function GraphBarHolder() {
  return (
    <div className={styles.barHolderContainer}>

        <GraphBar barHeight={20} barColor="rgb(230, 55, 55)" barField="2" />

        <GraphBar barHeight={50} barColor="blue"  barField="3" />

        <GraphBar barHeight={80} barColor="green"  barField="4" />

        <GraphBar barHeight={20} barColor="rgb(230, 55, 55)" barField="2" />


        <hr className={styles.graphLine+" "+styles.complete} />
        <hr className={styles.graphLine+" "+styles.eighty} />
        <hr className={styles.graphLine+" "+styles.sixty} />
        <hr className={styles.graphLine+" "+styles.forty} />
        <hr className={styles.graphLine+" "+styles.twenty} />

        <p  className={styles.graphField+" "+styles.complete}><i className="fa-solid fa-indian-rupee-sign"></i> 100</p>
        <p  className={styles.graphField+" "+styles.eighty}><i className="fa-solid fa-indian-rupee-sign"></i> 80</p>
        <p  className={styles.graphField+" "+styles.sixty}><i className="fa-solid fa-indian-rupee-sign"></i> 60</p>
        <p  className={styles.graphField+" "+styles.forty}><i className="fa-solid fa-indian-rupee-sign"></i> 40</p>
        <p  className={styles.graphField+" "+styles.twenty}><i className="fa-solid fa-indian-rupee-sign"></i> 20</p>
      
    </div>
  );
}

export default GraphBarHolder;
