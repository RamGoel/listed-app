import React from 'react'
import styles from './dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Metrics from './Metrics/Metrics'
function Dashboard() {
  return (
    <div className={styles.dashboard}>

      <div className={styles.dashLeft}>
        <Sidebar />
      </div>
      <div className={styles.dashRight}>
        <Header />
        <Metrics />
      </div>
    </div>
  )
}

export default Dashboard