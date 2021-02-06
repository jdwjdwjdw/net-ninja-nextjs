import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae quos modi nisi. Debitis, placeat. Pariatur quos sint consequuntur et temporibus. Quia et corrupti voluptas quod aperiam maiores doloribus eius.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis beatae quos modi nisi. Debitis, placeat. Pariatur quos sint consequuntur et temporibus. Quia et corrupti voluptas quod aperiam maiores doloribus eius.</p>
      <Footer />
    </div>
  )
}
