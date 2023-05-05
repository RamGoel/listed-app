import React from 'react'
import Image from 'next/image'
import styles from './chart.module.css'
import Chart from "chart.js/auto";
import angleDown from '../../../assets/angle-down.png'
import { CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';
import { Data } from '../../../utils/data';
Chart.register(CategoryScale);


const data = {
    labels: Data.map(e => e.year),
    datasets: [
        {
            label: 'No. of Users gained',
            data: Data.map(e => e.userGain),
            lineTension: 0.3,
            lineWidth:2,
            borderWidth: 2,
            borderColor: '#E9A0A0',

        },
        {
            label: 'No. of Users Lost',
            data: Data.map(e => e.userLost),
            lineTension: 0.3,
            borderWidth: 2,
            borderColor: '#9BDD7C'
        }
    ]
}



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
            <div className={styles.chartView}>
                <Line
                    style={{
                        height: '200px',
                    }}
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
        </div>
    )
}

export default LineChart