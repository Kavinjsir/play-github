import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { useState } from 'react';

const HW1 = () => {
  const [inputValue, setInputValue] = useState(``);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    alert(inputValue);
    e.preventDefault();
  };

  const onClickButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    alert(`Why click me!!!`);
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      This is div.
      <Head>
        <title>Practices</title>
        <meta
          name="description"
          content="Craft my skills of: TypeScript, React.js, css, html, Next.js"
        />
      </Head>
      <main className={styles.main}>
        This is the main block.
        <p>
          This is a paragraph.<span style={{ color: `blue` }}>span</span>
        </p>
        <section>This is a section.</section>
        <article>This is an article.</article>
        <header>This is a header.</header>
        <aside>This is an aside.</aside>
        <Image
          alt="bulogo"
          src="https://www.bu.edu/brand/files/2019/06/master_logo.gif"
        />
        <audio controls>
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
            type="audio/mpeg"
          />
        </audio>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            name="inputval"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
        <button onClick={(e) => onClickButton(e)}> Don&apos;t click me!</button>
      </main>
      <table>
        <tbody>
          <tr>
            <th>City</th>
            <td>Bos</td>
          </tr>
        </tbody>
      </table>
      <footer className={styles.footer}>This is the footer.</footer>
    </div>
  );
};

export default HW1;
