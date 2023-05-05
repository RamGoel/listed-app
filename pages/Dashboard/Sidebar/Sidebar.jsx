import React, { useState } from 'react'
import styles from './sidebar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import dashboadIcon from '../../../assets/dashboard_icon.png'
import scheduleIcon from '../../../assets/schedule_icon.png'
import settingIcon from '../../../assets/setting_icon.png'
import transactIcon from '../../../assets/transaction_icon.png'
import userIcon from '../../../assets/user_icon.png'

function SidebarLink({ data, index, handleClick, isActive }) {
  return (
    <div className={styles.sidebarLink} onClick={() => {
      handleClick(index)
    }}>
      <Image className={styles.sidebarLinkIcon} src={data.icon} />
      <p style={{
        fontWeight: (isActive) ? 'bold' : ''
      }}>{data.title}</p>
    </div>
  )
}
function Sidebar() {
  const sidebarData=[
    {
      title:"Dashboard",
      icon:dashboadIcon
    },
    {
      title:"Transaction",
      icon:transactIcon
    },
    {
      title:"Schedules",
      icon:scheduleIcon
    },
    {
      title:"Users",
      icon:userIcon
    },
    {
      title:"Settings",
      icon:settingIcon
    },
  ]
  const [active, setActive] = useState(1)
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarDiv}>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarTop}>

            <div className={styles.sidebarHead}>
              <h2>B<span className={styles.dashTitleSpan}>oard</span>.</h2>
            </div>
            <div className={styles.sidebarLinkSection}>
                {
                  sidebarData.map((data,index)=>{
                      return <SidebarLink 
                      data={data} 
                      handleClick={(val)=>setActive(val)} 
                      index={index+1}
                      isActive={active==index+1} />
                  })
                }
            </div>
          </div>
          <div className={styles.sidebarBottom}>
            <div className="">

              <Link href={'/'} className={styles.sidebarBottomLink}>Help</Link>
              <Link href={'/'} className={styles.sidebarBottomLink}>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar