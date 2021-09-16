import PostItem from '../../components/Global/PostItem'

export default function PostsPage({ posts }) {
  return (
    <div className="container">
      <div className="row">
        {
          posts.map(post => (
            <div className="col-12 col-md-6" key={'post-' + post.id}><PostItem post={post} /></div>
          ))
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const endPoint = process.env.API_URL + '/posts'
    const res = await fetch(endPoint)
    const { data: posts } = await res.json()

    return {
      props: {
        posts
      }
    }

  } catch(err) {
    console.error('[GET POSTS IN HOME PAGE]:', err)
  }
}