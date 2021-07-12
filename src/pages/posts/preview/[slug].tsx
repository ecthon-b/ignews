import { GetStaticProps } from "next"
import { useSession } from "next-auth/client";
import Head from 'next/head'
import { RichText } from "prismic-dom";
import { getPrismicClient } from "../../../services/prismic";
import Link from "next/link";
import styles from './post.module.scss';
import { useEffect } from "react";
import router from "next/router";

interface PostPreviewPost {
    post: {
        slug: string;
        title: string;
        content: string;
        updatedAt: string;
    }
}

export default function PostPreview({ post }: PostPreviewPost) {
    const [session] = useSession()

    useEffect(() => {
        if (session?.activeSubscription) {
            router.push(`/post/${post.slug}`)
        }
    }, [session])

    return (
        <>
            <Head>
                <title>{post.title} | Ignews</title>
            </Head>

            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div
                        className={`${styles.postContent} ${styles.previewContent}`}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <div className={styles.continueReading}>
                        Wanna continue reading?
                        <Link href="/">
                            <a>Subscribe now🤗</a>
                        </Link>

                    </div>
                </article>
            </main>

        </>
    )
}

export const getStaticPaths = () => {
    return {
        Paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params;

    const prismic = getPrismicClient()

    const response = await prismic.getByUID('publication', String(slug), {})

    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asHtml(response.data.content.splice(0, 3)),
        updateAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        })
    }

    return {
        props: {
            post,

        }
    }
}