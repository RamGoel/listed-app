import React from 'react'
import styles from './pie.module.css'
import { Data } from '../../utils/data'

const data = {
    labels: Data.map(e => e.year),
    datasets: [
        {
            label: 'No. of Users gained',
            data: Data.map(e => e.userGain),
            lineTension: 0.3,
            borderWidth: 2,
            borderColor: '#E9A0A0',

        },
    ]
}


function PieChart() {
  return (
    <div className={styles.pieBox}>
        <div className={styles.pieHeader}>
            <h3>Top Products</h3>
            <p>May - June 2021</p>
        </div>
        <div className={styles.pieView}>
            <PieChart
                data={data}
                options={null}
            />
        </div>
    </div>
  )
}

export default PieChart