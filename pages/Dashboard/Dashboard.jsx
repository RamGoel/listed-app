import React, { useState, useEffect } from 'react'
import styles from './dashboard.module.css'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Metrics from './Metrics/Metrics'
import LineChart from './LineChart/LineChart'
import PieChart from './PieChart/PieChart'
import Schedule from './Schedule/Schedule'
import Loader from '../../atoms/Loader'
import { useRouter } from 'next/router'
function Dashboard() {
  const router = useRouter();
  const [userImage,setUserImage]=useState('')
  const [lineData, setLineData] = useState({})
  const [pieData, setPieData] = useState({})
  const [isLoaded, setLoaded] = useState(false)
  useEffect(e => {
    fetch('https://raw.githubusercontent.com/RamGoel/sitern-api/main/utils/data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPieData({
          labels: data.map(e => e.year),
          datasets: [
            {
              label: 'No. of Users gained',
              data: data.map((e, index) => (index < 3) ? e.userGain : null),
              lineTension: 0.3,
              borderWidth: 2,
              backgroundColor: ['#E9A0A0', '#98D89E', '#F6DC7D'],
              borderColor: ['#E9A0A0', '#98D89E', '#F6DC7D']
            },
          ]
        })
        setLineData({
          labels: data.map(e => e.year),
          datasets: [
            {
              label: 'No. of Users gained',
              data: data.map(e => e.userGain),
              lineTension: 0.3,
              lineWidth: 2,
              borderWidth: 2,
              borderColor: '#E9A0A0',

            },
            {
              label: 'No. of Users Lost',
              data: data.map(e => e.userLost),
              lineTension: 0.3,
              borderWidth: 2,
              borderColor: '#9BDD7C'
            }
          ]
        })
        setTimeout(() => {

          setLoaded(true)
        }, 2000)
      })
      .catch(error => console.error(error));
  }, [''])


  useEffect(() => {
    setUserImage(router.query.profileImage);
  }, [router.query]);
  return (
    (isLoaded) ? <div className={styles.dashboard}>

      <div className={styles.dashLeft}>
        <Sidebar />
      </div>
      <div className={styles.dashRight}>
        <Header googleAccountImage={userImage} />
        <Metrics />
        <LineChart usersData={lineData} />
        <div className={styles.dashRightCards}>
          <PieChart usersData={pieData} />
          <Schedule />
        </div>
      </div>
    </div> : <Loader />
  )
}

export default Dashboard