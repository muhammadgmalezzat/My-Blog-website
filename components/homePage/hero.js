import styles from './hero.module.css'
import Image from 'next/image';
import {BsLinkedin ,BsFacebook ,BsGithub, BsBehance,BsInstagram }from 'react-icons/bs'
import {
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
    SlSocialGithub,
    SlSocialBehance
} from 'react-icons/sl'

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
            <div className={styles.sociallinks}>
                <ul >
                    <li>
                        <a href='https://github.com/muhammadgmalezzat' target="_blank">
                        <span>
                            <BsGithub />
                        </span>
                    </a>
                    </li>
                    <li><a href='https://www.facebook.com/mohamed.gmal.98871' target="_blank">
                        <span>
                            <BsFacebook />
                        </span>
                    </a></li>

                    <li><a href='https://www.linkedin.com/in/muhammad-gmal-61330119b/' target="_blank">
                        <span>
                            <BsLinkedin />
                        </span>
                    </a></li>

                    <li><a href='https://www.instagram.com/7958_muhammad/?fbclid=IwAR2eHRWktRWm-FDqcPWCFYOcm7FrbFBtr0X2mBRjMpjZWfCMcXrarMwtSg4' target="_blank">
                        <span>
                            <BsInstagram />
                        </span>
                    </a></li>

                    <li><a href='https://www.behance.net/muhammad12' target="_blank">
                        <span>
                            <BsBehance />
                        </span>
                    </a></li>
                </ul>
            </div>
            
        </section>
    )
}

export default hero