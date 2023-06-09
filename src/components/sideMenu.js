import styles from "../styles/sideMenuStyles.module.css";

function SideMenu() {
    return (
      <div className={styles.sideMenuContainer}>

        <div className={styles.sideMenuItem}>
            <span className={styles.sideMenuIcon}><i className="fa-solid fa-bars-staggered"></i></span>
            <p className={styles.menuTip}>Home</p>
        </div>

        <div className={styles.sideMenuItem + " " + styles.selected}>
            <span className={styles.sideMenuIcon}><i className="fa-solid fa-chart-pie"></i></span>
            <p className={styles.menuTip}>Dashboard</p>
        </div>

        <div className={styles.sideMenuItem}>
            <span className={styles.sideMenuIcon}><i className="fa-solid fa-filter"></i></span>
            <p className={styles.menuTip}>Filter</p>
        </div>

        <div className={styles.sideMenuItem}>
            <span className={styles.sideMenuIcon}><i className="fa-solid fa-sliders"></i></span>
            <p className={styles.menuTip}>Settings</p>
        </div>
        
      </div>
    );
  }
  
  export default SideMenu;
  