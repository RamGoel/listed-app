import React, { useState, useEffect } from 'react'
import styles from './pie.module.css'
import { Pie } from 'react-chartjs-2'
import angleDown from '../../assets/angle-down.png'
import Image from 'next/image'

function StatCard({ data }) {
    return <div className={styles.pieDataRight}>

        <div className={styles.chartTextBottomRight1}>
            <div style={{ background: data.color }}></div>
            <h3>{data.title}</h3>
        </div>
        <p>{data.percentage}</p>
    </div>
}



function PieChart({ usersData }) {

    var pieData = [
        {
            color: '#E9A0A0',
            title: 'Basic Tees',
            percentage: '55%'
        },
        {
            color: '#98D89E',
            title: 'Custom Short Pants',
            percentage: '31%'
        },
        {
            color: '#F6DC7D',
            title: 'Super Hoodies',
            percentage: '14%'
        },
    ]
    return (
        <div className={styles.pieBox}>
            <div className={styles.pieHeader}>
                <h3>Top Products</h3>
                <div className={styles.pieHeaderLeft}>
                    <p>May - June 2021</p>
                    <Image alt="app-image" src={angleDown} />
                </div>
            </div>
            <div className={styles.pieView}>
                <div className={styles.chartBox}>
                    <Pie
                        data={usersData}
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
                    {
                        pieData.map((productStats, index) => {
                            return <StatCard key={index} data={productStats} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PieChart