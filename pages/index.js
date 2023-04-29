import Hero from "../components/homePage/hero"
import FeaturedPosts from "../components/homePage/featuredPosts"
import { Fragment } from "react"
import {getFeaturedPosts} from '../lib/posts-util.js'
import Head from 'next/head';

function Homepage(props) {
    return (
        <div>
            <Fragment>
                <Head>
                    <title>MG' Blog</title>
                    <meta
                        name='description'
                        content='I post about programming and web development.'
                    />
                </Head>
                <Hero />
                <FeaturedPosts posts={props.posts} />
            </Fragment>
        </div>
    )
};

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts: featuredPosts
        }
    }
}
export default Homepage