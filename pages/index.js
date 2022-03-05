import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Head Component | Home</title>
        <meta name="keywords" content="ninjas"/>
        <link rel="canonical" href="https://google.com/" />

      </Head>
      <div>
        <h1 className={styles.title}>Next JS Head Component</h1>
        <p className={styles.text}>Next.js built-in component.</p>
        <p className={styles.text}>Lorem ipsum dolor sit adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>Link</a>
        </Link>
      </div>
    </>
  )
}
