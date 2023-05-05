import React from 'react'
import './MetricCard'
import peopleIcon from '../../assets/people_icon.png';
import cashIcon from '../../assets/cash_icon.png';
import likeIcon from '../../assets/like_icon.png';
import transactIcon from '../../assets/transact_icon_black.png';
import styles from './metrics.module.css'
import MetricCard from './MetricCard';
function Metrics() {
    const data=[
        {
            name:"Total Revenues",
            value:"$2,129,430",
            icon:cashIcon,
            background: '#DDEFE0'
        },
        {
            name:"Total Transactions",
            value:"1,520",
            icon:transactIcon,
            background: '#F4ECDD'

        },
        {
            name:"Total Likes",
            value:"9,721",
            icon:likeIcon,
            background: '#EFDADA'
        },
        {
            name:"Total Users",
            value:"892",
            icon:peopleIcon,
            background: '#DEE0EF'
        },
    ]
    return (
        <div className={styles.metricBox}>
            {
                data.map((e,index)=>{
                    return <MetricCard key={index} metrics={e} />
                })
            }
        </div>
    )
}

export default Metrics