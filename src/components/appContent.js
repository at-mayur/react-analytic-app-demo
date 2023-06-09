import styles from "../styles/appContentStyles.module.css";
import DateRangeCalendar from "./dateRangeCalendar";

import GarphCard from "./graphCard";
import InfoCard from "./infoCard";
import TableCard from "./tableCard";

function AppContent() {
  return (
    <div className={styles.appContentContainer}>

        <div className={styles.graphTabelContainer}>

            <GarphCard />

            <TableCard />

        </div>

        <div className={styles.filterSelector}>

          <div className={styles.infoCardsContainer}>
            <InfoCard title="Total Sale" value={150000} />
            <InfoCard title="Average Order Value" value={10000} />
          </div>

          <DateRangeCalendar />

        </div>
      
    </div>
  );
}

export default AppContent;
