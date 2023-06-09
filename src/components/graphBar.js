
import styles from "../styles/graphBarStyles.module.css";

function GraphBar(props) {
    const barStyles = {
        barDesign: {
            height: `${props.barHeight}%`,
            backgroundColor: props.barColor
        }
    };

  return (
    <div style={ barStyles.barDesign } className={styles.graphBar}>

        <p className={styles.barField}>{props.barField}</p>
      
    </div>
  );
}


export default GraphBar;
