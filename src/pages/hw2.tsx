import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useState, useEffect } from 'react';

import { calculateAge, today } from '@/lib/utils';

const HW2 = () => {
  const [birth, setBirth] = useState(today());
  const [age, setAge] = useState(0);

  useEffect(() => {
    const newAge = calculateAge(birth);
    setAge(newAge);
  }, [birth]);

  const onChangeBirthInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };

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
        <div className={styles.grid}>
          <div className={styles.card}>
            <input
              name="birth"
              type="Date"
              value={birth}
              onChange={onChangeBirthInput}
            />
          </div>

          <div className={styles.card}>
            Age:{` `}
            {age}
          </div>
        </div>
      </main>
      <footer className={styles.footer}>This is the footer.</footer>
    </div>
  );
};

export default HW2;
