import React from 'react'
import Image from 'next/image'
import styles from './chart.module.css'
import angleDown from '../../../assets/angle-down.png'
function LineChart() {
  return (
    <div className={styles.chartDiv}>
        <div className={styles.chartText}>
            <div className={styles.chartTextTop}>

            <h3>Activites</h3>
            </div>
            <div className={styles.chartTextBottom}>
                <div className={styles.chartTextBottomLeft}>
                    <p>May - June 2021</p>
                    <Image src={angleDown} />
                </div>
                <div className={styles.chartTextBottomRight}>
                    <div className={styles.chartTextBottomRight1}>
                        <div></div>
                        <p>Guest</p>
                    </div>
                    <div className={styles.chartTextBottomRight2}>
                        <div></div>
                        <p>User</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LineChart