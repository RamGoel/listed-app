import React from 'react'
import styles from './dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Metrics from './Metrics/Metrics'
import LineChart from './LineChart/LineChart'
import PieChart from './PieChart/PieChart'
import Schedule from './Schedule/Schedule'
function Dashboard() {
  return (
    <div className={styles.dashboard}>

      <div className={styles.dashLeft}>
        <Sidebar />
      </div>
      <div className={styles.dashRight}>
        <Header />
        <Metrics />
        <LineChart />
        <div className={styles.dashRightCards}>
          <PieChart />
          <Schedule />
        </div>
      </div>
    </div>
  )
}

export default Dashboard