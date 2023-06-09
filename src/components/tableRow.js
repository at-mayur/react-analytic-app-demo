
import styles from "../styles/tableRowStyles.module.css";

function TableRow() {
  return (
    <div className={styles.tableRowContainer}>

        <p className={styles.rowStartPointer}></p>

        <p>Product Name</p>

        <p className={styles.orders}>23 Orders</p>

        <p><i className="fa-solid fa-indian-rupee-sign"></i> 10000</p>
      
    </div>
  );
}

export default TableRow;
