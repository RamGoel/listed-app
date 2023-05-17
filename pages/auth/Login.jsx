import React, { useState } from 'react'
import styles from './login.module.css'
import googleImage from '../../assets/googleLogo.png'
import appleImage from '../../assets/appleLogo.png'
import Input from '../../atoms/Input'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../../atoms/Button'
import { useRouter } from 'next/router'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../utils/firebase'
function Login() {
  const router = useRouter()
  const [data, setData] = useState({})
  function handleLogin() {
    signInWithPopup(auth, googleProvider).then(e => {
      router.push({
        pathname: '/main/Dashboard',
        query: { profileImage: e.user.photoURL }
      }, `/dashboard`)
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className={styles.body}>
      <div className={styles.bodyLeft}>
        <h2>Board.</h2>
      </div>
      <div className={styles.bodyRight}>
        <div className={styles.bodyRightContent}>
          <div className={styles.loginFormTop}>
            <h2>Sign In</h2>
            <p>Sign in to your account</p>
            <div className={styles.loginButtons}>
              <button onClick={() => handleLogin()}>
                <Image src={googleImage} width={15} />
                <p>Sign in with Google</p>
              </button>
              <button>
                <Image src={appleImage} width={15} />
                <p>Sign in with Apple</p>
              </button>
            </div>
          </div>
          <div className={styles.loginForm}>
            <div>

              <div className={styles.formSection}>
                <p>Email Address</p>
                <Input
                  handler={(e) => {
                    setData({ ...data, email: e.target.value })
                  }}
                  placeholder={''}
                  isSecure={false}
                  propStyle={{
                    backgroundColor:
                      (data.email?.length
                        ? '#eaeaea7d'
                        : '#eaeaea')
                  }}
                />
              </div>
              <div className={styles.formSection}>
                <p>Password</p>
                <Input
                  handler={(e) => {
                    setData({ ...data, password: e.target.value })
                  }}
                  propStyle={{
                    backgroundColor:
                      (data.password?.length
                        ? '#eaeaea7d'
                        : '#eaeaea')
                  }}
                  placeholder={''}
                  isSecure={true}
                />
              </div>
              <div className={styles.formSection}>
                <Link href={'/'} className={styles.formLink}>Forgot Password?</Link>
              </div>
              <div>
                <Button btnText={'Sign in'} />
              </div>
            </div>
          </div>
          <div className={styles.loginBottom}>
            <p>Don't have an account, <Link
              href={'/'}
              className={styles.loginBottomLink}>Register here</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login