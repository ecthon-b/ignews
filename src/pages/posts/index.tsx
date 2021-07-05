import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>05 de julho de 2021</time>
                        <strong>THiS iSEViL GENiUSES</strong>
                        <p>Founded in 1999, Evil Geniuses shaped the history of esports with our long-running legacy.
                            Our success is rooted in the freedom to choose our own path. As EG eyes the future,
                            our commitment to excellence will drive our continued dominance across elite gaming as we attract top talent and steadfast partnerships.</p>
                    </a>
                    <a href="#">
                        <time>05 de julho de 2021</time>
                        <strong>THiS iSEViL GENiUSES</strong>
                        <p>Founded in 1999, Evil Geniuses shaped the history of esports with our long-running legacy.
                            Our success is rooted in the freedom to choose our own path. As EG eyes the future,
                            our commitment to excellence will drive our continued dominance across elite gaming as we attract top talent and steadfast partnerships.</p>
                    </a>
                    <a href="#">
                        <time>05 de julho de 2021</time>
                        <strong>THiS iSEViL GENiUSES</strong>
                        <p>Founded in 1999, Evil Geniuses shaped the history of esports with our long-running legacy.
                            Our success is rooted in the freedom to choose our own path. As EG eyes the future,
                            our commitment to excellence will drive our continued dominance across elite gaming as we attract top talent and steadfast partnerships.</p>
                    </a>
                    <a href="#">
                        <time>05 de julho de 2021</time>
                        <strong>THiS iSEViL GENiUSES</strong>
                        <p>Founded in 1999, Evil Geniuses shaped the history of esports with our long-running legacy.
                            Our success is rooted in the freedom to choose our own path. As EG eyes the future,
                            our commitment to excellence will drive our continued dominance across elite gaming as we attract top talent and steadfast partnerships.</p>
                    </a>
                </div>
            </main>
        </>
    )
}