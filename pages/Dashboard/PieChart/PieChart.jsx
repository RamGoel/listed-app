import React from 'react'
import styles from './pie.module.css'
import { Data } from '../../../utils/data'
import { Pie } from 'react-chartjs-2'
import angleDown from '../../../assets/angle-down.png'
import Image from 'next/image'
const data = {
    labels: Data.map(e => e.year),
    datasets: [
        {
            label: 'No. of Users gained',
            data: Data.map((e, index) => (index < 3) ? e.userGain : null),
            lineTension: 0.3,
            borderWidth: 2,
            backgroundColor: ['#E9A0A0', '#98D89E', '#F6DC7D'],
            borderColor: ['#E9A0A0', '#98D89E', '#F6DC7D']
        },
    ]
}


function PieChart() {
    return (
        <div className={styles.pieBox}>
            <div className={styles.pieHeader}>
                <h3>Top Products</h3>
                <div className={styles.pieHeaderLeft}>
                <p>May - June 2021</p>
                <Image src={angleDown} />
                </div>
            </div>
            <div className={styles.pieView}>
                <div className={styles.chartBox}>

                    <Pie
                        data={data}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                        }}
                    />
                </div>
                <div className={styles.chartTextBottomRight}>
                    <div className={styles.pieDataRight}>

                        <div className={styles.chartTextBottomRight1}>
                            <div></div>
                            <h3>Guest</h3>
                        </div>
                        <p>55%</p>
                    </div>
                    <div className={styles.pieDataRight}>

                        <div className={styles.chartTextBottomRight2}>
                            <div></div>
                            <h3>Guest</h3>
                        </div>
                        <p>55%</p>
                    </div>
                    <div className={styles.pieDataRight}>

                        <div className={styles.chartTextBottomRight3}>
                            <div></div>
                            <h3>Guest</h3>
                        </div>
                        <p>55%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PieChart