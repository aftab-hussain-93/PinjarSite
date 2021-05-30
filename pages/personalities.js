import Image from 'next/image'
import Meta from '../components/Meta'
import styles from '../styles/Personalities.module.css'

const personalities = () => {
    return (
        <div className={`container`}>
            <Meta title='Personalities' />
            <h1>Personalities Page</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <Image
                        src="/portrait_pic.jpg"
                        alt="logo"
                        width={150}
                        height={300}
                    />
                    <p>this is the first personality card</p>
                    <p>Nostrud aliqua aute ut ea. Veniam voluptate cillum aute incididunt aute aute nisi sint anim eu enim. Velit Lorem mollit eiusmod aliquip ullamco amet magna exercitation dolore do sit. Deserunt aute anim velit incididunt reprehenderit. Do minim ipsum reprehenderit culpa aute est ad nulla laborum elit anim sint. Qui ipsum deserunt minim aliquip ex duis dolor. Sint voluptate deserunt consequat veniam labore aliquip mollit irure.</p>
                </div>
                <div className={styles.card}>
                    <Image
                        src="/portrait_pic.jpg"
                        alt="logo"
                        width={150}
                        height={300}
                        />
                        <p>this is the second personality card</p>
                </div>
                <div className={styles.card}>
                    <Image
                        src="/portrait_pic.jpg"
                        alt="logo"
                        width={150}
                        height={300}
                        />
                        <p>this is the third personality card</p>
                </div>
            </div>
        </div>
    )
}

export default personalities