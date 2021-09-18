import Head from 'next/head'
import getPosts from '@/assets/utils/getPosts'
import PostItem from '@/components/Global/PostItem'

export default function PostsPage({ posts }) {
  return (
    <>
      <Head>
        <title>Ahmad Karimzade - Posts</title>
      </Head>

    <div className="container">
      <div className="row">
        {
          posts.map(post => (
            <div className="col-12 col-md-6" key={'post-' + post.id}><PostItem post={post} /></div>
          ))
        }
      </div>
    </div>
  </>
  )
}

export async function getStaticProps() {
  try {
    const posts = await getPosts()

    return {
      props: {
        posts
      }
    }

  } catch(err) {
    console.error('[GET POSTS IN HOME PAGE]:', err)
  }
}