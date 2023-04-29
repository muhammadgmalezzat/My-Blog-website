import AllPosts from "../../components/posts/all-posts"
import {getAllPosts} from '../../lib/posts-util'
import Head from 'next/head';

const postsPage = (props) => {
  const {allPosts}=props
  return (
    <div>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={ allPosts}/>
    </div>
  )
}
export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts:allPosts
    }
  }
}
export default postsPage