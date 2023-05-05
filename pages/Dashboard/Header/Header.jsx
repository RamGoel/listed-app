import React from 'react'
import Input from '../../../atoms/Input'
import styles from './header.module.css'
import Image from 'next/image'
import bellIcon from '../../../assets/notifications_icon.png'
import userImage from '../../../assets/account_icon.png'
import searchIcon from '../../../assets/search_icon.png'
function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <h3>Dashboard</h3>
            </div>
            <div className={styles.headerRight}>
                <div className={styles.headerSearch}>
                    <Input 
                    placeholder={'Search...'}
                    isIcon={true}
                    iconSrc={searchIcon}
                    propStyle={{
                        backgroundColor:'white'
                    }} />
                </div>
                <div className={styles.headerIcon}>
                    <Image src={bellIcon} style={{margin:'auto'}} />
                </div>
                <Image className={styles.headerImage} src={userImage} />

            </div>
        </div>
    )
}

export default Header