import Head from 'next/head';
import { useEffect } from 'react';

import styles from '@/styles/Home.module.css';
import '@/lib/loader';

const OP1 = () => {
  useEffect(() => {
    // Task 2.
    jQuery(`p, div, li`).each((_i, ele) => {
      jQuery(ele).css({
        'border-style': `dotted`,
        'border-width': `1px`,
        'border-color': `blue`,
      });
    });

    // Task 3.
    jQuery(`span`).each((_i, ele) => {
      console.log(jQuery(ele).attr(`name`));
    });
  }, []);

  return (
    <div className={styles.container}>
      This is div.
      <Head>
        <title>Practices</title>
        <meta
          name={`description`}
          content={`Craft my skills of: TypeScript, React.js, css, html, Next.js`}
        />
      </Head>
      <main className={styles.main}>
        TODO: Optional work 1<p>BThis is the paragraph</p>
        <span className={`onlyspan`}>
          This span name is &apos;onlyspan&apos;.
        </span>
      </main>
      <footer className={styles.footer}>This is the footer.</footer>
    </div>
  );
};

export default OP1;
