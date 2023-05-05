import React from 'react'
import styles from './dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
function Dashboard() {
  return (
    <div className={styles.dashboard}>
        {/* <Sidebar /> */}
        <Header />
    </div>
  )
}

export default Dashboard