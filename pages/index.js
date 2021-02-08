import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae quos modi nisi. Debitis, placeat. Pariatur quos sint consequuntur et temporibus. Quia et corrupti voluptas quod aperiam maiores doloribus eius.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae quos modi nisi. Debitis, placeat. Pariatur quos sint consequuntur et temporibus. Quia et corrupti voluptas quod aperiam maiores doloribus eius.</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
