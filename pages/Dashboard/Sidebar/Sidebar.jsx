import React from 'react'
import styles from './sidebar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import dashboadIcon from '../../../assets/dashboard_icon.png'
import scheduleIcon from '../../../assets/schedule_icon.png'
import settingIcon from '../../../assets/setting_icon.png'
import transactIcon from '../../../assets/transaction_icon.png'
import userIcon from '../../../assets/user_icon.png'
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarDiv}>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarTop}>

          <div className={styles.sidebarHead}>
            <h2>B<span className={styles.dashTitleSpan}>oard</span>.</h2>
          </div>
          <div className={styles.sidebarLinkSection}>
            <div className={styles.sidebarLink}>
              <Image className={styles.sidebarLinkIcon} src={dashboadIcon} />
              <p>Dashboard</p>
            </div>
            <div className={styles.sidebarLink}>
              <Image className={styles.sidebarLinkIcon} src={transactIcon} />
              <p>Transactions</p>
            </div>
            <div className={styles.sidebarLink}>
              <Image className={styles.sidebarLinkIcon} src={scheduleIcon} />
              <p>Schedules</p>
            </div>
            <div className={styles.sidebarLink}>
              <Image className={styles.sidebarLinkIcon} src={userIcon} />
              <p>Users</p>
            </div>
            <div className={styles.sidebarLink}>
              <Image className={styles.sidebarLinkIcon} src={settingIcon} />
              <p>Settings</p>
            </div>
          </div>
          </div>
          <div className={styles.sidebarBottom}>
            <div className="">

            <Link href={'/'} className={styles.sidebarBottomLink}>Help</Link>
            <Link href={'/'} className={styles.sidebarBottomLink}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar