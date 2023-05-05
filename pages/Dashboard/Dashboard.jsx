import React from 'react'
import styles from './dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
function Dashboard() {
  return (
    <div className={styles.dashboard}>
        <Sidebar />
    </div>
  )
}

export default Dashboard