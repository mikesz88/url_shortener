import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <ul>
            <li>Tech Stack</li>
            <ul>
              <li>NextJs</li>
              <li>Prisma</li>
              <li>SqLite</li>
            </ul>
          </ul>
        </div>
        <div className={styles.center}>
          <Image
            className={styles.logo}
            src='/next.svg'
            alt='Next.js Logo'
            width={180}
            height={37}
            priority
          />
        </div>
      </div>
      <div className={styles.body}>
        <h1>Url Shortener</h1>
        <h3>
          This only meant to practice full stack Next.JS skills with Prisma and
          simple authentication
        </h3>
        <div>Test out below (It will not save)</div>
        <input type='url' placeholder='https://...' />
      </div>
      <div>
        Created by:{' '}
        <a target='_blank' href='https://www.techysanchez.com'>
          Michael A Sanchez
        </a>
      </div>
    </main>
  );
}

