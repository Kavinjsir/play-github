import Head from 'next/head';
import NextLink from 'next/link';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practices</title>
        <meta
          name="description"
          content="Craft my skills of: TypeScript, React.js, css, html, Next.js"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Web Dev Practices.</h1>

        <p className={styles.description}>
          Get started by{` `}
          <code className={styles.code}>TypeScript</code> {` `}
          <code className={styles.code}>React.js</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <NextLink href="/hw1" passHref scroll={false}>
              Homework 1
            </NextLink>
          </div>

          <div className={styles.card}>
            <NextLink href="/hw2" passHref scroll={false}>
              Homework 2
            </NextLink>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        Powered by{` `}
        Tony
      </footer>
    </div>
  );
}
