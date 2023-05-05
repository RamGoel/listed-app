import React from 'react'
import styles from './metrics.module.css'
import Image from 'next/image'
function MetricCard({metrics}) {
  return (
    <div className={styles.metricCard} style={{background:metrics.background}}>
        <div className={styles.metricCardTop}>
            <Image alt="app-image"
                className={styles.metricCardImage}
                src={metrics.icon}
            />
        </div>
        <div className={styles.metricCardBottom}>
            <p>{metrics.name}</p>
            <h3>{metrics.value}</h3>
        </div>
        
    </div>
  )
}

export default MetricCard