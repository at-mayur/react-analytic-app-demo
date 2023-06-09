
import styles from "../styles/tableCardStyles.module.css";
import TableRow from "./tableRow";

function TableCard() {
  return (
    <div className={styles.tableContainer}>

        <p className={styles.tableTitle}>
            <i className="fa-solid fa-arrow-up-right-dots"></i>
            Top Orders
        </p>

        <TableRow />

        <TableRow />

        <TableRow />
      
    </div>
  );
}

export default TableCard;
