import React from 'react'
import styles from './schedule.module.css'
import angleRight from '../../../assets/angle-right.png'
import Image from 'next/image'

function ScheduleDiv({data}){
    return(
        <div style={{
            borderLeft:`5px solid ${data.color}`,
            paddingLeft:'10px',
            margin:'15px 0px'
        }}>
            <h3>{data.text}</h3>
            <p style={{
                margin:'5px 0px'
            }}>{data.startTime}-{data.endTime}</p>
            <p>at {data.location}</p>
        </div>
    )
}
function Schedule() {
    var data=[
        {
            text:"Meeting with suppliers from Kuta Bali",
            startTime:"14.00",
            endTime:"15.00",
            location:"Sunset Road, Kuta, Bali ",
            color:'#9BDD7C'
        },
        {
            text:"Check operation at Giga Factory 1",
            startTime:"18:00",
            endTime:"20:00",
            location:"Central Jakarta",
            color:'#6972C3'
        },
    ]
    return (
        <div className={styles.scheduleCard}>
            <div className={styles.scheduleHeader}>
                <h3>Today's Schedule</h3>
                <div className={styles.scheduleHeaderLeft}>
                    <p>See All</p>
                    <Image src={angleRight} />
                </div>
            </div>
            <div>

            {
                data?.map(data=>{
                    return <ScheduleDiv data={data} />
                })
            }
            </div>
        </div>
    )
}

export default Schedule