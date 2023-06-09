import Navbar from "./navbar";
import SideMenu from "./sideMenu";

import styles from "../styles/analyticAppStyles.module.css";
import AppContent from "./appContent";

function AnalyticsApp() {
  return (
    <div className={styles.appContainer}>

        <div className={styles.sideMenuContainer}>
            <SideMenu />
        </div>

        <div className={styles.contentContainer}>

            <Navbar />
            <AppContent />
            
        </div>
      
    </div>
  );
}

export default AnalyticsApp;
