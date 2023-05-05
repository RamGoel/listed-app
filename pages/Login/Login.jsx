import React from 'react'
import styles from './login.module.css'
import Input from '../../atoms/Input'
import Link from 'next/link'
import Button from '../../atoms/Button'
function Login() {
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
              <button>
                <img src='https://cdn-icons-png.flaticon.com/512/2991/2991148.png' width={20} />
                <p>Sign in with Google</p>
              </button>
              <button>
                <img src='data:image/png;base64,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' width={20} />
                <p>Sign in with Apple</p>
              </button>
            </div>
          </div>
          <div className={styles.loginForm}>
            <div>

            <div className={styles.formSection}>
              <p>Email Address</p>
              <Input placeholder={''} isSecure={false} />
            </div>
            <div className={styles.formSection}>
              <p>Password</p>
              <Input placeholder={''} isSecure={true} />
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