import styles from "../styles/navbarStyles.module.css";


function Navbar() {

    const showHideNavMenu = () => {

        const navMenu = document.getElementById('nav-menu');
        const navBtn = document.getElementById('nav-btn');

        navMenu.classList.toggle(styles.show);
        navBtn.classList.toggle(styles.navBtnFocus);

    };

    return (
      <div className={styles.navbarContainer}>

        <div className={styles.navBrandContainer}>
            <p className={styles.navTitle}>Dashboard</p>

            <button id="nav-btn" onClick={ showHideNavMenu } type="button" className={styles.navBtn}>
                <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
        </div>

        <div id="nav-menu" className={styles.navItemsContainer}>
            <div className={styles.navItem+" "+styles.search}>
                <span className={styles.navIcon}><i className="fa-solid fa-magnifying-glass"></i></span>
                <p className={styles.menuTip}>Search</p>
            </div>

            <div className={styles.navItem+" "+styles.notify}>
                <p className={styles.bellIcon}>
                    <span className={styles.navIcon}><i className="fa-regular fa-bell"></i></span>
                    <span className={styles.notificationDot}><i className="fa-solid fa-circle"></i></span>
                </p>
                <p className={styles.menuTip}>Notifications</p>
            </div>

            <div className={styles.navItem+" "+styles.profile}>
                <span className={styles.userImgContainer}><img alt="User-Profile" src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" /></span>
                <p className={styles.menuTip}>Profile</p>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Navbar;
  