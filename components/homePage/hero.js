import styles from './hero.module.css'
import Image from 'next/image';
const hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.image}>
                <Image
                    src='/images/site/black.jpg'
                    alt='An image showing Muhammad'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, I'm Muhammad</h1>
            <p>
                I blog about web development - especially frontend frameworks like React.
            </p>
        </section>
    )
}

export default hero