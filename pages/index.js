import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae quos modi nisi. Debitis, placeat. Pariatur quos sint consequuntur et temporibus. Quia et corrupti voluptas quod aperiam maiores doloribus eius.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae quos modi nisi. Debitis, placeat. Pariatur quos sint consequuntur et temporibus. Quia et corrupti voluptas quod aperiam maiores doloribus eius.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
  )
}
