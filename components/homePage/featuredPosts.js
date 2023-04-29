import styles from './featured-posts.module.css'
import PostsGrid from '../posts/posts-grid'

const featuredPosts = (props) => {
    return (
        <section className={styles.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    )
}

export default featuredPosts